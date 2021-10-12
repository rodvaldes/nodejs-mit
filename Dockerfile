FROM node:15
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENV ORG "Cybersyn"
ENV PORT 3000
EXPOSE $PORT
CMD ["npm", "run", "dev"]