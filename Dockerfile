# Stage 1: Build the application
FROM eclipse-temurin:17-jdk-focal AS builder

# Set working directory
WORKDIR /app

# Copy Gradle wrapper and build files
COPY gradlew .
COPY gradle gradle
COPY build.gradle settings.gradle .

# Make Gradle wrapper executable
RUN chmod +x gradlew

# Copy source code
COPY src src

# Build the application
RUN ./gradlew build -x test

# Stage 2: Create lightweight runtime image
FROM eclipse-temurin:17-jre-focal

WORKDIR /app

# Copy the built jar from builder
COPY --from=builder /app/build/libs/*.jar app.jar

# Expose the port your app runs on
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
