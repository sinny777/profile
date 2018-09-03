// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  API_BASE_URL: "https://api.hukamtechnologies.com/api",
  socket: {
    baseUrl: 'https://api.hukamtechnologies.com/api',
    options: {}
  },
  myWork: {
    "gitRepositories": [
      {
          "imgSrc": "/assets/images/chatbot1.png",
          "title": "Cognitive Chatbot",
          "description": "This repository shows the capabilities of IBM Watson Assistant and IBM Watson Discovery services to work together to find answers on a given query.",
          "link": "https://github.com/sinny777/cognitive"
      },
      {
          "imgSrc": "/assets/images/nlp.png",
          "title": "My Natural Language Classifier",
          "description": "This one has code for creating Natural Language classifier model that runs on IBM Watson Machine learning platform and can be configured to use runtime (CPU or GPU).",
          "link": "https://github.com/sinny777/natural_language_classifier"
      },
      {
          "imgSrc": "/assets/images/machinelearning1.jpeg",
          "title": "Machine Learning",
          "description": "This repository includes a direction for getting started with Machine Learning and Deep learning concepts using Scikit Learn, Tensorflow and Keras",
          "link": "https://github.com/sinny777/machinelearning"
      },
      {
          "imgSrc": "/assets/images/docker_rpi.png",
          "title": "Motion Detection on Raspberry Pi",
          "description": "This one uses Docker for running a motion detection and much more on Raspberry Pi",
          "link": "https://github.com/sinny777/rpi-motion-detection"
      },
      {
          "imgSrc": "/assets/images/home-automation-1.jpg",
          "title": "IoT Gateway for Home Automation",
          "description": "Home Automation Docker image that uses IBM Watson IoT Platform and multiple features like Alexa and Google Home",
          "link": "https://github.com/sinny777/rpi-motion-detection"
      }
    ]
  },
  badgesNCertificates: {
    "badges": [
      {
        "imgSrc": "/assets/images/badgesNCertificates/blockchainEssentials.png",
        "title": "IBM Blockchain Essentials",
        "description": "This badge earner has developed an understanding of Blockchain principles and practices and how they can be applied within a business environment. ",
        "link": "https://www.youracclaim.com/badges/9fe039f9-5a32-4c2f-a88c-de6a6fa41784"
      },
      {
        "imgSrc": "/assets/images/badgesNCertificates/DeepLearning.png",
        "title": "Deep Learning",
        "description": "Main concepts of Neural networks. Which network is used to tackle a problem, and can implement different shallow and deep networks with TensorFlow.",
        "link": "https://www.youracclaim.com/badges/c9748acd-971d-4ebf-b34d-debab52085d5"
      },
      {
        "imgSrc": "/assets/images/badgesNCertificates/AppliedDataSciencePython.png",
        "title": "Applied Data Science with Python",
        "description": "This badge earner is able to code in Python for data science.  They can analyze and visualize data with Python with packages like scikit-learn, matplotlib and bokeh.",
        "link": "https://www.youracclaim.com/badges/9fe039f9-5a32-4c2f-a88c-de6a6fa41784"
      },
      {
        "imgSrc": "/assets/images/badgesNCertificates/PythonForDataScience.png",
        "title": "Python for Data Science",
        "description": "The badge earner is able to write their own Python scripts and perform basic hands-on data analysis using IBM's Jupyter-based lab environment.",
        "link": "https://www.youracclaim.com/badges/1968b26c-fef3-4287-8b6f-a8138732a859"
      },
      {
        "imgSrc": "/assets/images/badgesNCertificates/BuildYourOwnChatbot.png",
        "title": "Build Your Own Chatbot",
        "description": "The badge earner has demonstrated an understanding of the creation of Chatbots by leveraging Watson Conversation and their deployment on WordPress.",
        "link": "https://www.youracclaim.com/badges/c6589912-5fc1-447b-881d-3ff56896f175"
      },
      {
        "imgSrc": "/assets/images/badgesNCertificates/DiscoveryDevelopers.png",
        "title": "Watson Discovery Service - Developers",
        "description": "This badge earner can articulate the process of setup, ingestion, and query in a Watson Discovery service solution.",
        "link": "https://www.youracclaim.com/badges/db934d4c-e9be-467c-aeda-fcab2f4f7b47"
      },
      {
        "imgSrc": "/assets/images/badgesNCertificates/DiscoveryFoundation.png",
        "title": "Watson Discovery Service Foundations",
        "description": "The individual can articulate what activities are involved in an implementation, functions and capabilities, and themes and use cases for a Watson Discovery service implementation.",
        "link": "https://www.youracclaim.com/badges/1ae80461-0cbb-4701-ad59-fcaacbc24813"
      }
    ],
  "certificates": [
    {
      "imgSrc": "/assets/images/badgesNCertificates/Cert_GCP_ML.png",
      "title": "End-to-End Machine Learning with Tensorflow on GCP",
      "link": "https://www.coursera.org/account/accomplishments/verify/TXLPCZHWLXMC"
    },
    {
      "imgSrc": "/assets/images/badgesNCertificates/Cert_DeepLearingFundamentals.png",
      "title": "Deep Learning Fundamentals",
      "link": "https://courses.cognitiveclass.ai/certificates/a2d596b1f4944a1d97aaa4cc3ef926d3"
    },
    {
      "imgSrc": "/assets/images/badgesNCertificates/Cert_DeepLearningWithTensorflow.png",
      "title": "Deep Learning With TensorFlow",
      "link": "https://courses.cognitiveclass.ai/certificates/6ebb6c4b2cdc4aef9b220d3960221363"
    },
    {
      "imgSrc": "/assets/images/badgesNCertificates/Cert_DeepLearningWithGPU.png",
      "title": "Deep Learning With GPU",
      "link": "https://courses.cognitiveclass.ai/certificates/d840483d3c9647878410b8786773a0a2"
    },
    {
      "imgSrc": "/assets/images/badgesNCertificates/Cert_MachineLearningWithPython.png",
      "title": "Machine Learning With Python",
      "link": "https://courses.cognitiveclass.ai/certificates/c3e1a5548da34bdcb3b63b275738a6d2"
    },
    {
      "imgSrc": "/assets/images/badgesNCertificates/Cert_BlockchainEssentials.png",
      "title": "IBM Blockchain Essentials",
      "link": "https://courses.cognitiveclass.ai/certificates/2f44b0e2d86a4a489b0d574a7f6026b6"
    },
    {
      "imgSrc": "/assets/images/badgesNCertificates/Cert_BuildYourOwnChatbot.png",
      "title": "Build Your Own Chatbot",
      "link": "https://courses.cognitiveclass.ai/certificates/2732b6559f854688a7f2bf97e649e97a"
    },
    {
      "imgSrc": "/assets/images/badgesNCertificates/Cert_Python101ForDataScience.png",
      "title": "Python For Data Science",
      "link": "https://courses.cognitiveclass.ai/certificates/c66ff91d868b40da8fc5b27aef3e677e"
    },
    {
      "imgSrc": "/assets/images/badgesNCertificates/Cert_DataAnalysisWithPython.png",
      "title": "Data Analysis With Python",
      "link": "https://courses.cognitiveclass.ai/certificates/529a59f31779457aab569e9d954a7a75"
    },
    {
      "imgSrc": "/assets/images/badgesNCertificates/Cert_DataVisualiztioWithPython.png",
      "title": "Data Visualization With Python",
      "link": "https://courses.cognitiveclass.ai/certificates/bf447b54ee474b29911681dc822f0198"
    },
    {
      "imgSrc": "/assets/images/badgesNCertificates/Cert_IBMApplicationDeveloper.png",
      "title": "IBM Certified Application Developer - Cloud Platform V1",
      "link": "/assets/images/badgesNCertificates/Cert_IBMApplicationDeveloper.png"
    },
    {
      "imgSrc": "/assets/images/badgesNCertificates/Cert_IBMWatsonDeveloper.png",
      "title": "IBM Certified Application Developer - Watson V3",
      "link": "/assets/images/badgesNCertificates/Cert_IBMWatsonDeveloper.png"
    }
  ]}
};
