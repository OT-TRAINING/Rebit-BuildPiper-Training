# Rebit-BuildPiper-Training
Rebit-BuildPiper-Training

## Build Backend Image
```bash
cd backend/
docker build -t project-backend .
```

## Build Frontend Image
```bash
cd ../frontend
docker build -t project-frontend .
```

## Create Docker Network
```bash
docker network create rebit-net
```

## Create Backend Container
```bash
docker run -d --name backend --network rebit-net -p 8080:8080 -e WELCOME_MSG="Welcome DevOps Team in ReBIT Training" project-backend
```
## Create Frontend Container
```bash
docker run -d --name frontend --network rebit-net -p 3000:3000 -e BACKEND_URL=http://backend:8080 project-frontend
```
## Intentionally adding Leaks
MONGODB_URI=mongodb+srv://admin:MySuperSecretPassword123@cluster0.abcde.mongodb.net/todoDB?retryWrites=true&w=majority
JWT_SECRET=supersecretjwtkeydonthardcodethis
API_KEY=sk-abc123def456ghi789jkl012mno345pqr  # This is a fake OpenAI API key – but imagine it's real!
To fetch user data, use this endpoint: `/api/user/:username`

**Sample GitHub Token for Testing:** `ghp_YourPersonalAccessTokenHere1234567890abcdef`  
*(This token has repo:read and user:email scopes – revoke if real!)*

## Deployment
Pushed to Heroku with these env vars (simulated here for docs):
- `HEROKU_API_KEY=hk_YourHerokuKey987654321`  
- Database: Use the MongoDB URI above.

## Contributing
Fork, PR, and test with Stripe for payments:  
Publish key: `pk_test_YourStripePublishableKey12345`  
Secret key: `sk_test_YourStripeSecretKey67890` *(Never share secret keys!)*
