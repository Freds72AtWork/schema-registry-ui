var clusters = [
  {
    NAME: "prod",
    // Schema Registry service URL (i.e. http://localhost:8081)
    SCHEMA_REGISTRY: "https://schema-registry.demo.landoop.com", // https://schema-registry.demo.landoop.com
    COLOR: "#141414" // optional
  },
  {
    NAME: "dev",
    SCHEMA_REGISTRY: "http://localhost/schema-registry",
    COLOR: "red", // optional
    allowGlobalConfigChanges: false, // optional
    //allowTransitiveCompatibilities: true        // if using a Confluent Platform release >= 3.1.1 uncomment this line
  }
];
