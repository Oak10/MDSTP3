FROM openjdk:17-jdk-slim

RUN groupadd -g 1000 nonroot && \
useradd -m -d /home/nonroot -s /bin/bash -g 1000 -u 1000 nonroot

WORKDIR /app