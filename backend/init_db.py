import os
from app import create_app
from models import db, User

def init_database():
    app = create_app('development')
    with app.app_context():
        # Create database tables
        db.create_all()
        print(f"✅ Database created at: {app.config['SQLALCHEMY_DATABASE_URI']}")
        
        # Create admin user if not exists
        admin = User.query.filter_by(username='admin').first()
        if not admin:
            admin = User(
                username='admin',
                email='admin@university.edu',
                password='Admin@123',
                full_name='System Administrator',
                role='admin',
                is_active=True
            )
            db.session.add(admin)
            
            counsellor = User(
                username='counsellor1',
                email='counsellor1@university.edu',
                password='Counsellor@123',
                full_name='Dr. Sarah Johnson',
                role='counsellor',
                phone='+1234567890',
                department='Psychology',
                is_active=True
            )
            db.session.add(counsellor)
            
            student = User(
                username='student1',
                email='student1@university.edu',
                password='Student@123',
                full_name='John Doe',
                role='student',
                student_id='STU12345',
                department='Computer Science',
                year_of_study=3,
                is_active=True
            )
            db.session.add(student)
            
            db.session.commit()
            print("\n" + "="*50)
            print("✅ Database initialized with sample users!")
            print("="*50)
            print("\n📝 Sample Users Credentials:")
            print("  👤 Admin:      admin / Admin@123")
            print("  👤 Counsellor: counsellor1 / Counsellor@123")
            print("  👤 Student:    student1 / Student@123")
            print("\n" + "="*50)
        else:
            print("✅ Database already initialized!")

if __name__ == '__main__':
    init_database()
