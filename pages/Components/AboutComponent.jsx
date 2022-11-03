export default function About() {
  return <div id="AboutComponent">
    <div>
      About
    </div>
    <video id="demoVideo"
      src="/demo.mp4"
      controls
      muted
      autoPlay={"autoplay"}
      preLoad="auto"
      loop
    ></video>
    <div>
      Utilizing Kafka for big data streaming provides many benefits, such as low latency, fault tolerance, and high throughput.  While it is an inherently useful platform, it can be difficult for users to be in-the-know of how the system is performing in real-time.
    </div>
    <div>
      Lighthouse is a developer tool that delivers live Kafka metrics for monitoring clusters stability and efficiency
    </div>
    <div>
    </div>
  </div>
}