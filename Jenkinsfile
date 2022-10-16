pipeline {
  agent any
  stages {
    stage('build project') {
      steps {
        sh 'yarn install && yarn build'
      }
    }

    stage('Deploy to S3') {
      steps {
        sh 'aws s3 sync build/ s3://anota-ai-front --acl public-read'
      }
    }

  }
}