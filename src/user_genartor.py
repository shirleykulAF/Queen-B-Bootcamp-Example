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
        "educationField" :"computer science",
        "graduationYear": str(random.randint(2015, 2023)),
        "jobTitle": fake.job(),
        "jobCompany" : fake.company(),
        "hobbyFirst": random.choice(["sing", "dance", "play sports", "paint", "cook"]),
        "hobbySecond" : random.choice(["drive", "volunteer", "code", "go shopping", "read"]),
        "image": f"person{random.choice([1,2,3,4,5,6,7])}",
        "number": f"9725{str(random.randint(20000000, 400000000))}"
    }
    users.append(user)

with open('users.json', 'w') as json_file:
    json.dump(users, json_file, indent=2)