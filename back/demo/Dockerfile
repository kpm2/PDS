# Use the Java Temurin 17 image as the base image
FROM maven:3.8.5-openjdk-17-slim as build

# Set the working directory in the container
WORKDIR /demo

# Copy the Maven Wrapper files
COPY .mvn .mvn
COPY mvnw mvnw
COPY mvnw.cmd mvnw.cmd

# Copy the application files
COPY . .

# Build the application using the Maven Wrapper
RUN ./mvnw clean install

# Specify the command to run your Spring Boot application
CMD ["java", "-jar", "target/demo-0.0.1-SNAPSHOT.jar"]