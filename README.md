
<p  align="center">
<img  src="https://github.com/GiorgosMandi/JedAI-WebApp/blob/master/images/JedAI_logo.png">
</p>


# Java gEneric DAta Integration (JedAI) Toolkit

JedAI constitutes an open source, high scalability toolkit that offers out-of-the-box solutions for any data integration task, e.g., Record Linkage, Entity Resolution and Link Discovery. At its core lies a set of *domain-independent*, *state-of-the-art* techniques that apply to both RDF and relational data. These techniques rely on an approximate, *schema-agnostic* functionality based on *(meta-)blocking* for high scalability.
You can read more about JedAI [here](https://jedai.scify.org/) and you can find the source code in this [repository](https://github.com/scify/JedAIToolkit)
  

# JedAI-WebApp

JedAI-WebApp is a GUI developed with Spring (Boot + MVC) and ReactJS that facilitates the execution of JedAI. It enables the user to construct its desired workflow by sequentially selecting the algorithm(s) of each step. Furthermore, JedAI-WebApp provides the following capabilities:
* Multiple data input interfaces (CSV, XML, RDF, serialized, database)
* Data (entities) Exclusion
* Data Exploration
* Automatic configuration of the algorithms' parameters — user can specify values or let the system detect the best via Grid Search or Random Search
* Detailed Results and display of the logs
* Exploration of the data and results

Furthermore, it facilitates the benchmarking of different workflows or configurations over a particular dataset through the workbench window, which summarizes the outcome of all runs and maintains details about the performance and the configuration of every step.

## Recent Enhancements

* **Improved Navigation Header** — replaced the bare logo header with a full responsive navbar including Home, Docs, and GitHub links
* **Footer** — added a persistent footer with links to the JedAI website and GitHub repository
* **Home Page Feature Cards** — added feature highlight cards on the home page describing data sources, auto-configuration, visualizations, and the workbench
* **Better Page Title & Meta Description** — updated `index.html` with a descriptive title and meta description for better discoverability
* **Layout** — improved overall page layout with a sticky header and flex-column body ensuring the footer always sits at the bottom

## How to Run
You can either build from source or you can download the available  **Docker image**  [here](https://hub.docker.com/repository/docker/gmandi/jedai-webapp).
### How to run JedAI as a Docker image
After installing Docker on your machine, type the following commands:
		
		docker pull gmandi/jedai-webapp
		docker run -p 8080:8080 gmandi/jedai-webapp

Then, open your browser and go to localhost:8080. JedAI should be running on your browser!

### How to build from source
		
		docker build . -t jedai

1. ### Configuring H2-Database
In the `src/main/resources/application.properties` file, set the fields:
  
		spring.datasource.username = <username>
		spring.datasource.password = <password>
		
These will be the credentials you use to log in to the [h2-console](http://localhost:8080/h2-console). By default, Spring Boot configures the application to **connect to an in-memory** store, which means the database is volatile and data will be lost when the application restarts. To change this behavior, use file-based storage by setting:

		spring.datasource.url=jdbc:h2:file:<absolute_path_to_file>

2. ### Execute
Start JedAI-WebApp by executing:

	./mvnw spring-boot:run 

Then open your browser and go to localhost:8080. JedAI should be running!

## Preview
### Configuring and executing workflow

<p  align="center">
<img  src="https://github.com/GiorgosMandi/JedAI-WebApp/blob/master/images/jedai.gif">
</p>

### Workbench

<p  align="center">
<img  src="https://github.com/GiorgosMandi/JedAI-WebApp/blob/master/images/workbench.gif">
</p>
