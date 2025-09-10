// MongoDB initialization script
db = db.getSiblingDB('edu_bloom_zone');

// Create collections
db.createCollection('users');
db.createCollection('courses');
db.createCollection('enrollments');

// Create indexes
db.users.createIndex({ "email": 1 }, { unique: true });
db.courses.createIndex({ "title": 1 });
db.enrollments.createIndex({ "userId": 1, "courseId": 1 }, { unique: true });

print('Database initialized successfully!');
