# Build stage: Use official Maven image for efficiency
FROM maven:3.9.9-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# Runtime stage: Use JRE for smaller image
FROM eclipse-temurin:17-jre-jammy
WORKDIR /app

# Copy the executable JAR (assumes name like backend-1.0.0.jar)
COPY --from=build /app/target/*.jar backend.jar

EXPOSE 8080
#ENV WELCOME_MSG="Welcome DevOps Team in Opstree"

ENTRYPOINT ["java", "-jar", "backend.jar"]
