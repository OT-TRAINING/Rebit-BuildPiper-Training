# Rebit-BuildPiper-Training
Rebit-BuildPiper-Training

## Build Backend Image
```cd backend/```
```docker build -t project-backend .```

## Build Frontend Image
```cd ../frontend```
```docker build -t project-frontend .```

## Create Docker Network
```docker network create rebit-net```

## Create Backend Container
```docker run -d --name backend --network rebit-net -p 8080:8080 -e WELCOME_MSG="Welcome DevOps Team in ReBIT Training" project-backend```

## Create Frontend Container
```docker run -d --name frontend --network rebit-net -p 3000:3000 -e BACKEND_URL=http://backend:8080 project-frontend```