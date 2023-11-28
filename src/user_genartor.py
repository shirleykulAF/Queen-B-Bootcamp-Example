import json
import random
from faker import Faker

fake = Faker()

users = []

for i in range(1, 21):
    user = {
        "id": i,
        "name": fake.name(),
        "email": fake.email(),
        "skill": random.choice(["HTML", "JavaScript", "nodeJS", "React", "CSS"]),
        "description": {
            "education": {
                "field": "computer science",  # For simplicity, using a fixed field
                "graduation": str(random.randint(2015, 2023))  # Random graduation year between 2015 and 2023
            },
            "work": {
                "job": fake.job(),
                "company": fake.company()
            },
            "hobby": fake.random_choices(elements=("sing", "dance", "play sports", "paint", "cook"), length=2)
        },
        "isActive": False,
        "image": f"person{random.choice([1,2,3,4,5,6,7])}"
    }
    users.append(user)

with open('users.json', 'w') as json_file:
    json.dump(users, json_file, indent=2)