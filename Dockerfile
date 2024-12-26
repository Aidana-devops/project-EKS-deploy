# Use the official nginx image as the base image
FROM nginx:latest

# Copy all project files (HTML, CSS, JS) to the nginx HTML directory
COPY . /usr/share/nginx/html

# Expose port 80 to serve the website
EXPOSE 80

# Run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]

