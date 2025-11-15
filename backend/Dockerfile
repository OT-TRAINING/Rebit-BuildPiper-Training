# Stage 1: Build stage
FROM eclipse-temurin:17-jdk-jammy AS build
WORKDIR /app
COPY pom.xml .
COPY src .
RUN apt-get update && apt-get install -y maven
RUN mvn clean package -DskipTests

# Stage 2: Runtime stage
FROM eclipse-temurin:17-jdk-jammy
WORKDIR /app
COPY --from=build /app/target/*.jar backend.jar
EXPOSE 8080
ENV WELCOME_MSG="Welcome DevOps Team in Opstree"
ENTRYPOINT ["java", "-jar", "backend.jar"]

