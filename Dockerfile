FROM eclipse-temurin:17-jdk-jammy

WORKDIR /app

# Project copy
COPY Virtual_Herbal_Garden/ .

# Ant install + build
RUN apt-get update && \
    apt-get install -y ant && \
    ant

EXPOSE 8080

CMD ["java", "-jar", "dist/Virtual_Herbal_Garden.jar"]
