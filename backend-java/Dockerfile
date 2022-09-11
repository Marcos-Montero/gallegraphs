FROM maven:3-openjdk-18
COPY . .
RUN mvn -v
RUN mvn clean install
EXPOSE 8080
CMD ["mvn", "spring-boot:run"]
