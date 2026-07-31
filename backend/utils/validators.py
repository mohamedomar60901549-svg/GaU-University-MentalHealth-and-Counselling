import re

def validate_email(email):
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None

def validate_password(password):
    return len(password) >= 8

def validate_required_fields(data, fields):
    for field in fields:
        if field not in data or not data[field]:
            return False
    return True

def validate_phone(phone):
    pattern = r'^\+?[\d\s-]{10,}$'
    return re.match(pattern, phone) is not None

def validate_student_id(student_id):
    pattern = r'^[A-Z0-9]{6,}$'
    return re.match(pattern, student_id) is not None