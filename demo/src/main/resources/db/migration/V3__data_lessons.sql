INSERT INTO lessons (title,foto_path,content)
VALUES ('1 Introduction',
'assets/images/introdução.png',
'
Unlike standard software, Machine Learning (ML) systems have complex entanglement with the data on top of standard code. This complex relationship makes such systems much harder to maintain in the long run. Furthermore, different experts (application developers, data scientists, domain engineers, etc.) have to work together.

As a reaction to these challenges, the area of Machine Learning Operations (MLOps) emerged. MLOps can help reduce these issues as it promotes automation of all the steps involved in the construction of an ML system from development to deployment. Formally, MLOps is a discipline which is formed of a combination of ML and Development Operations (DevOps) to deploy ML systems reliably and efficiently.
');

INSERT INTO lessons (title,foto_path,content)
VALUES ('2 What is MLOps',
'assets/images/WhatIsMLOps.png',
'
At its core, MLOps is the standardization and streamlining of machine learning life cycle management. It is a software engineering approach in which an interoperable team produces machine learning applications based on code, data and models in small, secure new versions that can be replicated and delivered reliably at any time, in short custom cycles.

This approach includes three basic procedures involving:
    • collection, selection and preparation of data to be used in model training,
    • in finding and selecting the most efficient model after testing and experimenting with different models
    • in developing and sending the selected model in production.

After collecting, evaluating and selecting the data that will be used for training, we automate the process of creating models and training them. This allows us to produce more than one model which we can test and experiment in order to produce a more efficient and effective model while recording the results of our tests.

Then we have to resolve various issues related to the production of the model, as well as submit it to various tests in order to confirm its reliability before developing it for production. Finally, we can monitor the model and collect the resulting new data, which will be used to retrain the model, thus ensuring its continuous improvement.
');

INSERT INTO lessons (title,foto_path,content)
VALUES ('3 Phases of a MLOps project',
'assets/images/PhasesofaMLOpsproject.png',
'
Mlops involves a combinatio of tasks related to software development and operations related with machine learning.

Mlops process may include:
    • Data preparation: Gather and clean data to make it suitable for machine learning
    • Feature engeneering: Select and create features that will be used as inputs to the machine learning model
    • Model selection: Choose the machine learning algorith and model architecture that will be used to build the model
    • Hyperparameter tuning: Adjust the hyperparameters of the machine learning model to optimize the perfomance
    • Model testing: Test the machine learning model to ensure that it is accurate and reliable
    • Model deployment: Deploy the machine learning model to a production enviroment using MLOps and processes
    • Model management: Manage the learning model in production, tracking the model performance and updating the model as needed
    • Model monitoring: Monitor the performance of the machine learning model , tracking mectris such as accuaracy and monitor for data drift, and the needs for data drift.
');

INSERT INTO lessons (title,foto_path,content)
VALUES ('4 From DevOps to MLOps',
   'assets/images/FromDevOpstoMLOps.png',
   '
DevOps stands for a set of practices with the main purpose to minimize the needed time for a software release, reducing the gap between software development and operations. DevOps requires a delivery cycle that involves planning, development, testing, deployment, release and monitoring as well as active cooperation between different team members.

Continuous software engineering (SE) refers to iterative software development and related aspects like continuous integration, continuous delivery, continuous testing and continuous deployment. The two main principles of DevOps are Continuous Integration (CI) and Continuous Delivery (CD).

Continuous Integration is a software practice that focuses on automating the process of code integration from multiple developers. In this practice, the contributors are encouraged to merge their code into the main repository more frequently. This enables shorter development cycles and improves quality, as flaws are identified very early in the process. The core of this process is a version control system and automated software building and testing process.

CD ensures that an application is not moved to the production phase until automated testing and quality checks have been successfully completed. It lowers deployment risk, cost, and provides rapid feedback to users. It is a practice in which the software is built in a manner that is always in a production-ready state. This ensures that changes could be released on demand quickly and safely.
');

INSERT INTO lessons (title,foto_path,content)
VALUES ('5 DevOps and MLOps: comparison',
'assets/images/DevOpsandMLOpscomparison.png',
'
They both center around:
    • Robust automation and trust between teams
    • The idea of collaboration and increased communication between teams
    • The end-to-end service life cycle (build, test, release)
    • Prioritizing continuous delivery and high quality

Yet there is one critical difference between MLOps and DevOps: deploying software code into production is fundamentally different than deploying machine learning models into production. While software code is relatively static (“relatively” because many modern software-as-a-service [SaaS] companies do have DevOps teams that can iterate quite quickly and deploy in production multiple times per day), data is always changing, which means machine learning models are constantly learning and adapting—or not, as the case may be—to new inputs. The complexity of this environment, including the fact that machine learning models are made up of both code and data, is what makes MLOps a new and unique discipline.

In addition to traditional unit and integration testing, CI introduces additional testing procedures such as data and model validation. From the perspective of CD, processed datasets and trained models are automatically and continuously delivered by data scientists to ML systems engineers.

Additional reasons for managing ML models something different:
    • Data and business goals are constantly changing
    • Diverse players in the chain that may speak different languages
    • Many roles for data scientists, unable to do any of them thoroughly

A Machine Learning model is not independent but is part of a wider software system and consists not only of code but also of data. As the data is constantly changing, the model is constantly called upon to retrain from the new data that emerges. For this reason, MLOps introduce a new practice, in addition to CI and CD, that of Continuous Training (CT), which aims to automatically retrain the model where needed. From the above, it becomes clear that compared to DevOps, MLOps are much more complex and incorporate additional procedures involving data and models.

From the perspective of continuous training (CT), introduction of new data and model performance degradation require a trigger to retrain the model or improve model performance through online methods. In addition, appropriate monitoring facilities ensure proper execution of operations.
');

INSERT INTO lessons (title,foto_path,content)
VALUES ('6 Benefits of using MLOps',
'assets/images/BenefitsofusingMLOps.png',
'
    • Improved collaboration: MLOps allows data scientits and other IT professionals to work together in a more effecively way, ensuring that the machine learning models have better quality and are properly integrated into production environments
    • Faster deployment: MLOps practices automates many processes involving in building, testing, and deplying machine learning models, wich can speed up the overall develop and deployment process.
    • Increased agility: MLOps allows organizations to quickly iiterate and improve their machine learning models, making it easier to test and deploy new versions.
    • Increased realiability: By automating the testing and the deployment process, MLOps can reduce the risk of errors and improve the realiability of machine learning models in the production phase.
    • Better monitoring: MLOps tools can help to monitor machine learning models in production, allowing organizations to identify and adress any issues that may arise. (ex: datadrift)
    • Enhanced scallability: MLOps practices can help to ensure that machine learning models can scale to meet the needs of an organization, wheter that means handling a large volume of data, handling a data drift or serving a model drift.
    • Enhanced security: Mlops can help to ensure that a machine learning models are deployed in a secure manner, protecting sensitive data and meeting regulation requirements to this sensitive data.

In summary, MLOps can help organizations to develop and deploy machine learning models more efficiently and effectively, leading to a improve in quality that provides a better business outcome.

Good MLOps practices will help teams at a minimum:
    • Keep track of versioning, especially with experiments in the design phase
    • Understand whether retrained models are better than the previous versions (and promoting models to production that are performing better)
    • Ensure (at defined periods—daily, monthly, etc.) that model performance is not degrading in production
');

INSERT INTO lessons (title,foto_path,content)
VALUES ('7 Challenges',
'assets/images/Challenges.png',
'
A. Efficient Pipelines
    A MLOps system includes various pipelines. Commonly a data manipulation pipeline, a model creation pipeline and a deployment pipeline are mandatory. Each of these pipelines must be compatible with the others, in a way that optimizes flow and minimizes errors. From this aspect it is critical to choose the right tools for the creation and connection of these pipelines.  Also, it is always critical to use the same data preprocessing libraries in every pipeline.

B. Re-Training
    After monitoring and tracking your model performance, the next step is retraining your machine learning model. The objective is to ensure that the quality of your model in production is up to date. However, even if the pipelines are perfect, there are many problems that complicate or even make retraining impossible.

C. Monitoring
    In most papers and articles, monitoring is positioned as one of the most important functions in MLOps. This is because to understand the results helps understanding the lack of the entire system.
        • Data monitoring: Monitoring the data can be extremely useful in many ways. Detection of outliers and drift is a way to prevent a failure of the model and help the right training. Constant monitoring of the shape of the data is always opposed to training data it is away.
        • Model Monitoring: Monitoring the accuracy of a model is a way to evaluate the performance in a bunch of data at a precise moment. For a high maturity level system, we need to monitor more aspects of our model and the whole system. We need to know more about the structure of the model, the performance, the reason why it works or it doesn’t.
');