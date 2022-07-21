const opentelemetry = require('@opentelemetry/sdk-node');
const {
getNodeAutoInstrumentations,
} = require('@opentelemetry/auto-instrumentations-node');
const { lmResourceDetector } = require('@logicmonitor/lm-telemetry-sdk');
const {
OTLPTraceExporter,
} = require('@opentelemetry/exporter-trace-otlp-http');

const exporter = new OTLPTraceExporter({
url: 'https://lmsrikarachanta.logicmonitor.com/rest/api/v1/traces',
headers: {
Authorization: 'Bearer ZFdJTTlLNlIzamJaNEJTTDVZODI6YmRYN2RFNDI2ZHdVL2orNm92RWpCUT09'
},
});

const sdk = new opentelemetry.NodeSDK({
traceExporter: exporter,
instrumentations: [getNodeAutoInstrumentations()],
});

module.exports = async function () {
await sdk.detectResources({
detectors: [lmResourceDetector],
});
await sdk.start();
console.log('Tracing Initialized');
};