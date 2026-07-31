from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import bcrypt
from flask_jwt_extended import create_access_token, create_refresh_token

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(200), nullable=False)
    full_name = db.Column(db.String(100), nullable=False)
    role = db.Column(db.String(20), nullable=False, default='student')
    student_id = db.Column(db.String(20), unique=True, nullable=True)
    phone = db.Column(db.String(20), nullable=True)
    department = db.Column(db.String(100), nullable=True)
    year_of_study = db.Column(db.Integer, nullable=True)
    is_active = db.Column(db.Boolean, default=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    appointments = db.relationship('Appointment', foreign_keys='Appointment.student_id', backref='student', lazy=True)
    counselled_appointments = db.relationship('Appointment', foreign_keys='Appointment.counsellor_id', backref='counsellor', lazy=True)
    feedbacks = db.relationship('Feedback', backref='user', lazy=True)
    
    def __init__(self, username, email, password, full_name, role='student', **kwargs):
        self.username = username
        self.email = email
        self.set_password(password)
        self.full_name = full_name
        self.role = role
        for key, value in kwargs.items():
            setattr(self, key, value)
    
    def set_password(self, password):
        salt = bcrypt.gensalt()
        self.password_hash = bcrypt.hashpw(password.encode('utf-8'), salt).decode('utf-8')
    
    def check_password(self, password):
        return bcrypt.checkpw(password.encode('utf-8'), self.password_hash.encode('utf-8'))
    
    def get_tokens(self):
        access_token = create_access_token(identity={
            'id': self.id,
            'username': self.username,
            'role': self.role,
            'email': self.email
        })
        refresh_token = create_refresh_token(identity=self.id)
        return {
            'access_token': access_token,
            'refresh_token': refresh_token
        }
    
    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'full_name': self.full_name,
            'role': self.role,
            'student_id': self.student_id,
            'phone': self.phone,
            'department': self.department,
            'year_of_study': self.year_of_study,
            'is_active': self.is_active,
            'created_at': self.created_at.isoformat() if self.created_at else None
        }

class Appointment(db.Model):
    __tablename__ = 'appointments'
    
    id = db.Column(db.Integer, primary_key=True)
    student_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    counsellor_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    appointment_date = db.Column(db.DateTime, nullable=False)
    duration = db.Column(db.Integer, default=60)
    status = db.Column(db.String(20), default='pending')
    meeting_link = db.Column(db.String(200))
    meeting_type = db.Column(db.String(20), default='virtual')
    location = db.Column(db.String(200))
    notes = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'student': self.student.to_dict() if self.student else None,
            'counsellor': self.counsellor.to_dict() if self.counsellor else None,
            'title': self.title,
            'description': self.description,
            'appointment_date': self.appointment_date.isoformat() if self.appointment_date else None,
            'duration': self.duration,
            'status': self.status,
            'meeting_link': self.meeting_link,
            'meeting_type': self.meeting_type,
            'location': self.location,
            'notes': self.notes,
            'created_at': self.created_at.isoformat() if self.created_at else None
        }

class Feedback(db.Model):
    __tablename__ = 'feedback'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    appointment_id = db.Column(db.Integer, db.ForeignKey('appointments.id'), nullable=True)
    rating = db.Column(db.Integer, nullable=False)
    comments = db.Column(db.Text)
    category = db.Column(db.String(50))
    is_anonymous = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'user': self.user.to_dict() if self.user else None,
            'appointment_id': self.appointment_id,
            'rating': self.rating,
            'comments': self.comments,
            'category': self.category,
            'is_anonymous': self.is_anonymous,
            'created_at': self.created_at.isoformat() if self.created_at else None
        }

class Resource(db.Model):
    __tablename__ = 'resources'
    
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    category = db.Column(db.String(50))
    url = db.Column(db.String(200))
    file_path = db.Column(db.String(200))
    tags = db.Column(db.String(200))
    is_published = db.Column(db.Boolean, default=True)
    created_by = db.Column(db.Integer, db.ForeignKey('users.id'))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'category': self.category,
            'url': self.url,
            'file_path': self.file_path,
            'tags': self.tags.split(',') if self.tags else [],
            'is_published': self.is_published,
            'created_at': self.created_at.isoformat() if self.created_at else None
        }