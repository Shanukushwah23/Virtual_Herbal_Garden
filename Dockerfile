FROM openjdk:17-jdk-slim

WORKDIR /app

# Project folder copy karo
COPY Virtual_Herbal_Garden/ .

# Ant install + build
RUN apt-get update && \
    apt-get install -y ant && \
    ant

EXPOSE 8080

CMD ["java", "-jar", "dist/Virtual_Herbal_Garden.jar"]
