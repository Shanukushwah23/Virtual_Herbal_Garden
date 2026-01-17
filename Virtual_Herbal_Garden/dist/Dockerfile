# Base image: Tomcat with JDK 17
FROM tomcat:9-jdk17

# Set working directory (Tomcat ke webapps me)
WORKDIR /usr/local/tomcat/webapps/

# Copy WAR file into Tomcat
COPY dist/Virtual_Herbal_Garden.war app.war

# Expose Tomcat port
EXPOSE 8080

# Start Tomcat
CMD ["catalina.sh", "run"]
