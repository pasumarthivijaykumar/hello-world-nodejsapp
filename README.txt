
get files from 
git clone https://github.com/pasumarthivijaykumar/hello-world-nodejsapp.git



1.	Go inside cloned / prepared folder 
docker build -t <nameOfTheImage> -f ./.Dockerfile .

Ex: docker build -t hello-world-nodejsapp -f ./.Dockerfile .


2.	Run the docker image as follows,
docker run -it --rm -p <portToRedirect>:<runningPortInContainer> --name <nameOfTheContainer> <ContainerImage>

Ex: docker run -it --rm -p 1337:17783 --name my-running-app hello-world-nodejsapp




Now from your PC you can access the app in browser using the redirection port given

http://localhost:1337

We shouldbe able to see a web page with index.js details of node app.