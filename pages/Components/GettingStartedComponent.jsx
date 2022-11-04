export default function GettingStarted() {
  return <div id="GettingStartedComponent">
    Getting Started
    <div id="bodyText" display="block">
    <div>
    There are just a few steps that need to be completed before being able to visualize all your data!
      </div>

      To begin, a pre-existing connection between your Confluent Kafka cluster and Prometheus server is required for the application to display any output. 
      Don't worry if you don't have a Confluent Kafka cluster or Prometheus server yet, here are some resources to set those up!
      <div id="link1" onClick={()=> {window.open("https://docs.confluent.io/confluent-cli/current/command-reference/kafka/cluster/index.html#confluent-kafka-cluster", '_blank')}}>
      Setting up a Confluent Kafka Cluster
      </div>
      <div id="link2" onClick={()=> {window.open("https://prometheus.io/docs/prometheus/latest/getting_started/", '_blank')}}>
      Setting up a Prometheus Server
      </div>

      Next, grab your Prometheus server endpoint and replace the default connection endpoint in the application and voila!
      


</div>

  </div>
}