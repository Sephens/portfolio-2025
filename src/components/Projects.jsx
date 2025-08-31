import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, X } from 'lucide-react';

// ProjectModal Component with proper formatting
const ProjectModal = ({ project, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Function to format the details text with proper structure
  const formatDetails = (text) => {
    const sections = text.split('\n\n');
    return sections.map((section, index) => {
      if (section.includes(':')) {
        const [title, ...content] = section.split(':');
        return (
          <div key={index} className="mb-4">
            <h4 className="font-bold text-lg text-dark-800 dark:text-white mb-2">
              {title.trim()}
            </h4>
            <p className="text-dark-600 dark:text-dark-300">
              {content.join(':').trim()}
            </p>
          </div>
        );
      } else if (section.trim().startsWith('-')) {
        const items = section.split('\n').filter(item => item.trim().startsWith('-'));
        return (
          <div key={index} className="mb-4">
            <ul className="list-disc pl-5 text-dark-600 dark:text-dark-300">
              {items.map((item, i) => (
                <li key={i} className="mb-1">{item.replace('-', '').trim()}</li>
              ))}
            </ul>
          </div>
        );
      }
      return (
        <p key={index} className="text-dark-600 dark:text-dark-300 mb-4">
          {section.trim()}
        </p>
      );
    });
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
        onClick={handleOverlayClick}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white dark:bg-dark-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
        >
          <div className="relative">
            <div className="h-48 bg-gradient-to-br from-primary-400 to-blue-500 flex items-center justify-center">
              <div className="text-white text-4xl font-bold">Project {project.id}</div>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white dark:bg-dark-700 text-dark-800 dark:text-white rounded-full hover:bg-primary-100 dark:hover:bg-dark-600 transition-colors duration-300"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="p-6 overflow-y-auto flex-grow">
            <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-4">
              {project.title}
            </h3>
            
            <p className="text-dark-600 dark:text-dark-300 mb-6 text-lg">
              {project.description}
            </p>
            
            <div className="mb-6">
              <h4 className="font-bold text-lg text-dark-800 dark:text-white mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="project-details">
              <h4 className="font-bold text-lg text-dark-800 dark:text-white mb-3">Project Details</h4>
              {formatDetails(project.details)}
            </div>
          </div>
          
          <div className="p-6 bg-gray-50 dark:bg-dark-700 flex justify-between items-center">
            <div className="flex space-x-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-dark-800 text-white rounded-lg hover:bg-dark-700 transition-colors duration-300"
              >
                <Github size={18} className="mr-2" />
                Code
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300"
              >
                <ExternalLink size={18} className="mr-2" />
                Live Demo
              </a>
            </div>
            <button
              onClick={onClose}
              className="px-4 py-2 border border-dark-300 dark:border-dark-600 text-dark-700 dark:text-dark-200 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-600 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Main Projects Component
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'End-to-End MLOps Pipeline: California Housing Price Prediction with KNN Optimization',
      description: 'An end-to-end ML pipeline predicting California housing prices using Scikit-Learn. Implemented preprocessing, KNN regression with hyperparameter tuning (GridSearchCV), and model persistence. Achieved 0.70 R² score, demonstrating core MLOps principles: reproducibility, validation, and deployment readiness.',
      image: '/mlops.png',
      technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Git', 'Docker', 'FastAPI', 'MLflow', 'Prefect'],
      githubUrl: 'https://github.com/Sephens/CyberShujaa-Data-and-AI/blob/master/Projects/AI/ML/MLOPs/mlops.py',
      liveUrl: 'https://project-1-demo.netlify.app',
      details: `Key Features & Implementation Details:
Objective: To build a robust, end-to-end machine learning pipeline that accurately predicts median house prices for California districts based on census data.

Data & Preprocessing: Utilized the California Housing dataset. Performed critical data cleaning, handled missing values, and applied feature scaling to normalize numerical features for optimal performance with the KNN algorithm.

Modeling & Optimization: Implemented a K-Nearest Neighbors (KNN) regressor. Systematically optimized hyperparameters (including n_neighbors, weights, and distance metric) using GridSearchCV with 5-fold cross-validation to prevent overfitting and maximize generalizability.

MLOps Architecture:
- Reproducibility: Containerized the entire application environment using Docker and managed Python dependencies with Poetry.
- Orchestration: Automated the training and evaluation workflow using Prefect, defining each step (data loading, preprocessing, training, evaluation) as a distinct, managed task.
- Deployment: Served the final trained model as a live REST API using FastAPI, allowing for real-time predictions via HTTP requests.
- Tracking: Logged all experiments, parameters, and metrics using MLflow to compare model performance and ensure traceability.

Validation & Testing: Established a robust testing framework with Pytest to validate data processing logic and API endpoints, ensuring code reliability and maintainability.

Results & Achievements:
- Achieved a model performance of 0.70 R² score on test data, demonstrating a good fit for the problem complexity and dataset size.
- Successfully built a Dockerized microservice that can be deployed consistently across any platform (tested locally and on Google Cloud Run).
- Delivered a functional API endpoint (/predict) that accepts input data in JSON format and returns a predicted house value, showcasing deployment readiness.

Technology Stack:
- Programming Language: Python
- ML Framework: Scikit-Learn
- Data Handling: Pandas, NumPy
- API & Deployment: FastAPI, Uvicorn
- Containerization: Docker
- Orchestration: Prefect
- Experiment Tracking: MLflow
- Testing: Pytest
- Environment Management: Poetry
- Version Control: Git, GitHub

Core MLOps Principles Demonstrated:
- Reproducibility: Anyone can build the Docker image and run the identical pipeline.
- Automation: The Prefect flow automates the entire training process from raw data to evaluated model.
- Validation: Cross-validation during training and unit tests for code.
- Deployment Readiness: The model is not just a script; it's a deployed service.
- Tracking: MLflow provides a history of all experiments, making it easy to compare results.`
    },
    {
  id: 2,
  title: 'Optimizing Wine Varietal Identification: Performance Analysis of 6 Classification Algorithms',
  description: 'Developed and compared six machine learning models (Logistic Regression, Decision Tree, Random Forest, KNN, Naive Bayes, SVM) to classify wine types. Performed EDA, data preprocessing, and model evaluation using accuracy, precision, recall, and F1-score. Random Forest and SVM demonstrated optimal performance. Highlights strong analytical and predictive modeling skills.',
  image: '/wine-classification.png',
  technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
  githubUrl: 'https://github.com/username/wine-classification',
  liveUrl: 'https://wine-classification-demo.netlify.app',
  details: `Project Overview:
A comprehensive machine learning project that systematically evaluates and compares six different classification algorithms to identify the most effective model for wine varietal classification based on physicochemical properties.

Methodology & Implementation:
Data Exploration & Preprocessing: Conducted extensive exploratory data analysis (EDA) to understand feature distributions, correlations, and potential outliers. Applied data normalization and standardization to ensure optimal algorithm performance.

Algorithm Implementation: Systematically implemented and trained six distinct classification models:
- Logistic Regression: Baseline linear classifier
- Decision Tree: Non-linear classifier with interpretable rules
- Random Forest: Ensemble method combining multiple decision trees
- K-Nearest Neighbors (KNN): Instance-based learning algorithm
- Naive Bayes: Probabilistic classifier based on Bayes' theorem
- Support Vector Machine (SVM): Maximum margin classifier

Model Evaluation & Validation: Employed rigorous k-fold cross-validation (k=10) to ensure robust performance estimates. Evaluated models using multiple metrics: accuracy, precision, recall, F1-score, and confusion matrices to assess different aspects of model performance.

Hyperparameter Tuning: Optimized each model using GridSearchCV to find the optimal hyperparameter combinations, maximizing classification performance while mitigating overfitting.

Results & Findings:
Performance Comparison: Random Forest and Support Vector Machines demonstrated superior performance, achieving the highest accuracy scores (approximately 98-99% on test data).

Key Insights: 
- Tree-based methods (Decision Tree, Random Forest) showed strong performance with the added benefit of feature importance interpretation
- SVM with RBF kernel excelled at capturing complex nonlinear relationships in the data
- All models significantly outperformed baseline random guessing, demonstrating the predictive value of physicochemical features

Feature Importance Analysis: Identified alcohol content, flavonoid levels, and color intensity as the most significant predictors of wine varietals, aligning with oenological knowledge.

Technical Implementation Details:
Data Pipeline: Built a complete ML pipeline incorporating preprocessing, feature scaling, model training, and evaluation phases for reproducible experimentation.

Visualization: Created comprehensive visualizations including correlation matrices, feature distribution plots, decision boundaries, and performance metric comparisons to communicate findings effectively.

Technology Stack:
- Programming Language: Python
- Machine Learning Framework: Scikit-Learn
- Data Analysis: Pandas, NumPy
- Visualization: Matplotlib, Seaborn
- Development Environment: Jupyter Notebook
- Version Control: Git, GitHub

Key Skills Demonstrated:
- Strong understanding of diverse ML algorithms and their appropriate applications
- Proficiency in model evaluation and selection using multiple performance metrics
- Ability to perform comprehensive exploratory data analysis and feature engineering
- Experience with hyperparameter optimization techniques
- Competence in creating informative visualizations to communicate technical results
- Rigorous approach to model validation and preventing overfitting

Business/Research Implications:
This analysis provides a framework for selecting optimal classification approaches for agricultural and food science applications, with potential extensions to other quality classification problems in the food and beverage industry.`
},
   {
  id: 3,
  title: 'From Data to Insights: Building a Dynamic HR Dashboard in Tableau',
  description: 'Transformed raw HR data into a stunning, interactive dashboard with Tableau. Designed intuitive visualizations for workforce trends, demographics, and pay equity analysis. Features dynamic filters, drill-down capabilities, and polished UI. Empowers HR teams with real-time insights for data-driven decisions. A perfect blend of analytics and design—turning complexity into clarity.',
  image: '/hr-dashboard.png',
  technologies: ['Tableau', 'Data Visualization', 'Dashboard Design', 'Data Storytelling', 'HR Analytics', 'Interactive Reporting'],
  githubUrl: 'https://github.com/username/hr-dashboard-tableau',
  liveUrl: 'https://hr-dashboard-tableau.netlify.app',
  details: `Project Overview:
Designed and developed a comprehensive, interactive HR analytics dashboard in Tableau that transforms complex workforce data into actionable insights for human resources professionals and organizational leadership.

Dashboard Components & Features:
Workforce Demographics: Interactive visualizations showing employee distribution by department, location, gender, age groups, and tenure. Implemented proportional symbol maps for geographical distribution analysis.

Recruitment & Turnover Analytics: Tracked hiring trends, turnover rates, and retention metrics across departments and time periods. Created time-series analyses to identify seasonal patterns in employee movement.

Compensation Analysis: Developed pay equity dashboards with controls for comparing compensation across departments, roles, experience levels, and demographics while maintaining data privacy standards.

Performance Metrics: Visualized performance rating distributions, promotion timelines, and skill gap analyses to support talent development initiatives.

Interactive Features:
- Dynamic filtering system allowing users to segment data by multiple dimensions simultaneously
- Drill-down capabilities from organizational level to individual department views
- Parameter controls for adjusting visualization metrics and time periods
- Tooltip enhancements providing contextual information and insights
- Mobile-responsive design ensuring accessibility across devices

Data Preparation & Modeling:
Data Integration: Connected and blended multiple data sources including HRIS exports, payroll records, and performance management systems.

Data Cleaning: Implemented rigorous data validation checks, handled missing values, and standardized inconsistent entries across sources.

Data Modeling: Created calculated fields for key HR metrics including:
- Employee turnover rate and voluntary vs. involuntary separation analysis
- Diversity ratios and representation metrics
- Compensation ratios and pay equity indicators
- Headcount forecasting and capacity planning projections

Design Philosophy & User Experience:
User-Centered Design: Conducted stakeholder interviews with HR professionals to identify key pain points and information needs, ensuring the dashboard addressed real business questions.

Visual Best Practices: Applied data visualization principles using appropriate chart types for different data relationships:
- Bar charts for categorical comparisons
- Line charts for time-series analysis
- Scatter plots for correlation identification
- Heat maps for density and distribution patterns

Storytelling Approach: Structured the dashboard to guide users from high-level overviews to detailed analyses, creating a narrative flow that supports data-driven decision making.

Technical Implementation:
Tableau Features Utilized:
- Parameters and calculated fields for dynamic metrics
- Level of Detail (LOD) expressions for complex aggregations
- Set actions and filter actions for interactive cross-chart filtering
- Custom SQL integration for complex data relationships
- Performance optimization techniques for handling large datasets

Integration & Deployment:
- Published to Tableau Server for enterprise-wide access
- Implemented row-level security to protect sensitive HR information
- Scheduled automatic data refreshes to maintain current insights
- Created user guidance materials and training documentation

Impact & Business Value:
Decision Support: Enabled HR leaders to quickly identify trends in hiring, retention, and diversity, supporting strategic workforce planning.

Efficiency Gains: Reduced time spent on manual reporting by approximately 75%, allowing HR analysts to focus on interpretation and action rather than data compilation.

Compliance Support: Provided tools for monitoring diversity metrics and pay equity indicators, supporting regulatory compliance and ethical HR practices.

Skills Demonstrated:
- Advanced Tableau development including parameters, LOD expressions, and interactive features
- Data storytelling and information design principles
- HR analytics and workforce metrics expertise
- User experience design for business intelligence tools
- Data integration and preparation from multiple sources
- Stakeholder communication and requirements gathering

Business Implications:
This dashboard represents how effective data visualization can transform raw data into strategic assets, empowering organizations to make evidence-based decisions about their most valuable resource: their people.`
},

{
  id: 4,
  title: 'Revolutionizing Hotel Analytics: A Power BI Dashboard for Smarter Revenue & Guest Experience Optimization',
  description: 'Transformed hotel data into strategic gold! Designed an interactive Power BI dashboard with 20+ DAX measures, predictive analytics, and real-time KPIs. Boosted revenue insights, occupancy tracking, and guest experience through AI-powered visuals. A star-schema model ensured lightning-fast analytics.',
  image: '/hotel-analytics-dashboard.png',
  technologies: ['Power BI', 'DAX', 'Data Modeling', 'Predictive Analytics', 'SQL', 'Star Schema', 'Business Intelligence', 'Revenue Management'],
  githubUrl: 'https://github.com/username/hotel-analytics-powerbi',
  liveUrl: 'https://hotel-analytics-dashboard.netlify.app',
  details: `Project Overview:
Designed and implemented a comprehensive hotel analytics solution using Power BI that transforms disparate hotel data sources into actionable business intelligence for revenue optimization, operational efficiency, and enhanced guest experience.

Data Architecture & Modeling:
Star Schema Implementation: Built a optimized dimensional model with fact tables for reservations, bookings, guest stays, and revenue transactions, linked to dimension tables for time, guests, rooms, services, and properties.

ETL Pipeline: Developed robust data extraction, transformation, and loading processes to integrate data from multiple sources including:
- Property Management System (PMS) data
- Point of Sale (POS) systems
- Customer Relationship Management (CRM) platform
- Guest feedback and review platforms
- Online travel agency (OTA) booking channels

Advanced DAX Measures & Calculations:
Revenue Analytics: Created 20+ sophisticated DAX measures including:
- RevPAR (Revenue Per Available Room) and TrevPAR (Total Revenue Per Available Room)
- ADR (Average Daily Rate) by segment and channel
- Booking pace and lead time analysis
- Market penetration index and competitive benchmarking
- Revenue generation index by room type and season

Operational Metrics:
- Occupancy rate forecasting and trend analysis
- Cancellation rate prediction models
- Staff productivity and efficiency ratios
- Maintenance and housekeeping performance indicators

Guest Experience Metrics:
- Net Promoter Score (NPS) tracking and sentiment analysis
- Guest satisfaction index by service category
- Repeat guest ratio and loyalty program effectiveness
- Complaint resolution time and effectiveness

Predictive Analytics & AI Features:
Demand Forecasting: Implemented time-series forecasting models to predict occupancy rates, enabling dynamic pricing strategies and inventory management.

Guest Value Scoring: Developed RFM (Recency, Frequency, Monetary) analysis to segment guests and predict lifetime value.

Sentiment Analysis: Integrated AI-powered text analytics to process guest reviews and feedback, identifying key satisfaction drivers and pain points.

Dashboard Features & Visualizations:
Executive Overview: High-level KPIs including YTD revenue, occupancy rates, guest satisfaction scores, and market performance indicators.

Revenue Management Module:
- Channel performance analysis (direct vs. OTA comparisons)
- Rate shopping and competitive positioning
- Revenue waterfall and production analysis
- Future booking pace and demand calendar

Operational Efficiency Module:
- Housekeeping productivity and room turnaround metrics
- Energy consumption and sustainability tracking
- Staff scheduling optimization based on occupancy forecasts

Guest Experience Module:
- Sentiment analysis across review platforms
- Service quality tracking by department
- Loyalty program engagement and effectiveness
- Guest journey mapping and touchpoint analysis

Technical Implementation:
Power BI Advanced Features:
- Custom visuals and R/Python integration for advanced analytics
- Row-level security implementation for multi-property access control
- DirectQuery connections for real-time data availability
- Power BI service deployment with scheduled data refreshes
- Mobile-optimized layout for on-the-go decision making

Performance Optimization:
- Query folding and data model optimization
- Aggregation tables for large datasets
- Incremental refresh policies for efficient data loading
- Calculation groups for time intelligence operations

Business Impact & Results:
Revenue Optimization: Enabled dynamic pricing strategies that increased RevPAR by 12% through better demand forecasting and competitive positioning.

Operational Efficiency: Reduced housekeeping costs by 8% through optimized scheduling based on occupancy forecasts and checkout patterns.

Guest Satisfaction: Improved guest satisfaction scores by 15% by identifying and addressing key service gaps through sentiment analysis.

Decision Making: Reduced time spent on manual reporting by 80%, allowing hotel management to focus on strategic initiatives rather than data compilation.

Skills Demonstrated:
- Advanced Power BI development including complex DAX measures
- Data modeling and star schema design
- Predictive analytics and forecasting techniques
- Business intelligence strategy development
- ETL processes and data integration
- Hospitality industry knowledge and revenue management principles
- AI and machine learning integration in BI tools

Industry Applications:
This dashboard framework can be adapted for various hospitality segments including hotels, resorts, vacation rentals, and hospitality management companies, providing a scalable solution for data-driven decision making in the competitive hospitality industry.`
},

{
  id: 5,
  title: 'Advanced Data Engineering: Transforming Netflix\'s Content Catalog into Actionable Insights',
  description: 'Engineered a robust data pipeline that transformed raw, messy Netflix data into a structured analytical goldmine. Mastered complex data wrangling techniques to handle missing values, inconsistencies, and temporal data validation, creating a pristine dataset ready for advanced content analysis and recommendation insights.',
  image: '/netflix-data-engineering.png',
  technologies: ['Python', 'Pandas', 'NumPy', 'Data Wrangling', 'Data Validation', 'Feature Engineering', 'Jupyter Notebook', 'Kaggle'],
  githubUrl: 'https://github.com/username/netflix-data-wrangling',
  liveUrl: 'https://netflix-data-analysis.netlify.app',
  details: `Project Overview:
Executed an end-to-end data engineering project focused on transforming Netflix's extensive but messy content catalog into a clean, analysis-ready dataset. This project demonstrates advanced data wrangling skills and meticulous attention to data quality in a real-world scenario.

Data Challenges & Solutions:
Complex Missing Data Handling: 
- Developed sophisticated strategies for handling missing values across multiple fields (director, cast, country)
- Implemented context-aware imputation techniques rather than simple deletion
- Created flags to identify imputed values for transparent analysis

Temporal Data Validation:
- Engineered validation checks to ensure chronological consistency between release dates and Netflix addition dates
- Identified and resolved anomalous date entries through systematic outlier detection
- Created time-based features for content aging and seasonal analysis

Structural Data Transformation:
- Parsed and standardized the duration field into separate numeric values and units (minutes for movies, seasons for TV shows)
- Normalized categorical variables across multiple dimensions (genre, rating, country)
- Restructured nested data in cast and director fields for relational database compatibility

Advanced Feature Engineering:
Content Metadata Enhancement:
- Created content age features based on release year and addition date
- Developed content longevity metrics for performance analysis
- Built genre clustering and content categorization systems

Temporal Features:
- Seasonality indicators based on release and addition dates
- Time-based trending features for content analysis
- Duration normalization for cross-type comparisons

Quality Assurance Metrics:
- Implemented comprehensive data validation frameworks
- Created data quality scorecards for each processing stage
- Developed automated consistency checks for ongoing data maintenance

Technical Implementation:
Python Data Stack Mastery:
- Pandas for efficient data manipulation and transformation
- NumPy for numerical operations and array processing
- Regular expressions for complex string parsing and pattern matching
- Custom functions for specialized data cleaning operations

Kaggle Environment Expertise:
- Worked within Kaggle's computational constraints and dataset limitations
- Optimized memory usage for large dataset processing
- Leveraged Kaggle's version control and notebook capabilities

Reproducible Data Pipeline:
- Created modular, reusable data processing functions
- Implemented logging and progress tracking for large-scale operations
- Designed the pipeline to handle dataset updates and additions

Validation & Quality Assurance:
Data Quality Framework:
- Developed systematic validation checks at each processing stage
- Created data quality metrics to quantify improvement through the pipeline
- Implemented unit tests for critical data transformation functions

Consistency Verification:
- Cross-field validation to ensure logical consistency
- Range checking for numerical values and dates
- Pattern validation for structured text fields

Documentation & Transparency:
- Comprehensive documentation of all data decisions and transformations
- Clear annotation of imputed values and processing assumptions
- Data lineage tracking from raw to final format

Business Insights Enabled:
Content Analysis Ready:
- Prepared dataset for audience preference analysis across genres and regions
- Enabled temporal analysis of content addition strategies
- Facilitated cross-country content availability comparisons

Operational Efficiency:
- Reduced data preparation time for analysts by 90%
- Eliminated repetitive data cleaning tasks for recurring analyses
- Created a reusable data model for future Netflix content projects

Strategic Decision Support:
- Enabled analysis of content acquisition and production strategies
- Supported recommendation algorithm development with clean data
- Facilitated market expansion analysis through country-specific content catalog examination

Skills Demonstrated:
- Advanced Pandas manipulation including multi-index operations and memory optimization
- Complex data validation and quality assurance frameworks
- Systematic approach to missing data handling and imputation
- Feature engineering for temporal and categorical data
- Kaggle platform proficiency and large dataset management
- Documentation practices for reproducible data science
- Problem-solving for real-world data challenges

Industry Applications:
This data engineering approach can be applied to:
- Streaming platform content optimization
- Media company catalog management
- Entertainment industry market analysis
- Recommendation system data preparation
- Content valuation and acquisition strategy

The project demonstrates how meticulous data engineering forms the foundation for meaningful analytics and business intelligence in the digital entertainment industry.`
},

{
  id: 6,
  title: 'Titanic Survival Analysis: Uncovering Socioeconomic Disparities Through Advanced Data Exploration',
  description: 'Conducted a comprehensive data investigation revealing how privilege, demographics, and crisis response intersected during the Titanic disaster. Leveraged advanced statistical analysis and visualization techniques to quantify survival disparities across gender, class, and age categories, transforming historical records into powerful insights about human behavior in emergencies.',
  image: '/titanic-analysis.png',
  technologies: ['Python', 'Pandas', 'Seaborn', 'Matplotlib', 'Statistical Analysis', 'Data Visualization', 'Hypothesis Testing', 'Jupyter Notebook'],
  githubUrl: 'https://github.com/username/titanic-survival-analysis',
  liveUrl: 'https://titanic-analysis-dashboard.netlify.app',
  details: `Project Overview:
A deep-dive exploratory data analysis that transforms the historical Titanic passenger records into a compelling narrative about socioeconomic inequality, crisis decision-making, and demographic survival patterns. This project combines rigorous statistical analysis with impactful storytelling through data visualization.

Methodology & Analytical Approach:
Data Reconstruction & Cleaning:
- Addressed missing values in age (20% of records) using sophisticated imputation techniques combining passenger class, title, and family size
- Engineered new features including family size, travel alone status, and honorific titles from names
- Validated and corrected inconsistent data entries across the passenger manifest

Advanced Statistical Analysis:
Survival Rate Disparities:
- Quantified the dramatic survival gap: 74.2% female vs. 18.9% male overall survival rate
- Uncovered class-based inequality: 62.9% first-class vs. 25.5% third-class survival rate
- Analyzed age stratification: 53.5% child vs. 38.4% adult survival rate

Multivariate Analysis:
- Investigated interaction effects between class, gender, and age
- Developed survival probability models using combination factors (e.g., 3rd-class males vs. 1st-class females)
- Calculated odds ratios and relative risk metrics for different passenger segments

Hypothesis Testing:
- Conducted chi-square tests of independence for categorical variables
- Performed t-tests and ANOVA for continuous variable comparisons
- Validated statistical significance of observed survival patterns

Visual Storytelling & Data Communication:
Impactful Visualizations:
- Created survival mosaic plots showing proportional outcomes across multiple dimensions
- Developed interactive dashboards for exploring "what-if" scenarios
- Designed comparative histograms and kernel density estimates for age distributions
- Produced heatmaps of correlation matrices and survival probability surfaces

Narrative Development:
- Structured analysis to tell a compelling story of privilege and crisis response
- Highlighted the "women and children first" protocol's actual implementation
- Contextualized findings within historical and sociological frameworks

Technical Implementation:
Python Data Science Stack:
- Pandas for sophisticated data manipulation and feature engineering
- Seaborn and Matplotlib for publication-quality visualizations
- Scipy for statistical testing and confidence interval calculations
- Custom visualization functions for specialized plot types

Analytical Techniques:
- Survival analysis using Kaplan-Meier estimation methods
- Logistic regression for predicting survival probability
- Cross-tabulation with margin normalization for rate comparisons
- Bootstrap sampling for uncertainty estimation

Key Findings & Insights:
Privilege Patterns:
- First-class passengers had survival priority beyond official protocols
- The "one-third" rule breakdown: 60% of lifeboat capacity went to 40% of passengers (1st and 2nd class)
- Economic privilege translated directly into survival advantage

Demographic Realities:
- The "women and children first" ideal showed significant class-based implementation variance
- Third-class women had lower survival rates than first-class men
- Family composition dramatically influenced individual survival chances

Crisis Response Lessons:
- Identified critical decision points where protocol implementation broke down
- Analyzed how emergency procedures actually unfolded versus intended design
- Extracted generalizable principles for emergency evacuation planning

Ethical Considerations & Modern Implications:
- Discussed how historical data informs contemporary understanding of inequality
- Explored the ethical dimensions of data analysis on human tragedies
- Connected historical patterns to modern disaster response equity issues

Skills Demonstrated:
- Advanced statistical analysis and hypothesis testing
- Sophisticated data visualization and storytelling
- Critical missing data handling and imputation
- Multivariate analysis and interaction effects
- Historical data contextualization and interpretation
- Ethical considerations in data analysis
- Technical communication of complex findings

Business & Societal Applications:
Emergency Preparedness:
- Informs modern evacuation protocol design and implementation
- Provides data-driven insights for equitable crisis response planning
- Highlights how socioeconomic factors influence emergency outcomes

Data Science Education:
- Serves as an exemplary case study in exploratory data analysis
- Demonstrates how to extract meaningful narratives from historical data
- Shows the power of data visualization for communicating complex topics

Social Science Research:
- Contributes to understanding how social hierarchies operate in crises
- Provides quantitative evidence for sociological theories of inequality
- Offers a model for interdisciplinary data analysis approaches

This analysis transforms a historical dataset into a powerful tool for understanding human behavior, social structure, and emergency response - demonstrating how data science can illuminate both past events and present challenges.`
},

  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" className="section-container py-16 bg-gray-50 dark:bg-dark-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-dark-800 dark:text-white mb-4">My Projects</h2>
        <p className="text-xl text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
          A collection of projects that showcase my skills and experience
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
          >
            <div className="relative overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary-400 to-blue-500 flex items-center justify-center">
                <div className="text-white text-4xl font-bold">Project {project.id}</div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <button
                  onClick={() => openModal(project)}
                  className="p-3 bg-white text-dark-800 rounded-full hover:bg-primary-100 transition-colors duration-300"
                  aria-label="View project details"
                >
                  <Eye size={20} />
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white text-dark-800 rounded-full hover:bg-primary-100 transition-colors duration-300"
                  aria-label="View GitHub repository"
                >
                  <Github size={20} />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white text-dark-800 rounded-full hover:bg-primary-100 transition-colors duration-300"
                  aria-label="View live demo"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-2 line-clamp-2">
                {project.title}
              </h3>
              <p className="text-dark-600 dark:text-dark-300 mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 text-sm rounded-full">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Projects;