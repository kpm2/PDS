# Use the Java Temurin 21 image as the base image
FROM eclipse-temurin:21

# Set the working directory in the container
WORKDIR /demo

# Copy the JAR file into the container at /demo
COPY demo/.mvn/wrapper/maven-wrapper.jar /demo/

# Expose the port that your Spring Boot application runs on
EXPOSE 8070

# Specify the command to run your Spring Boot application
CMD ["java", "-jar", "maven-wrapper.jar"]