// Sample BPMN diagrams for different process types

export const procurementBpmn = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="Process_1" isExecutable="false">
    <bpmn:startEvent id="StartEvent_1" name="Procurement Request">
      <bpmn:outgoing>Flow_1</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:task id="Task_1" name="Submit Request Form">
      <bpmn:incoming>Flow_1</bpmn:incoming>
      <bpmn:outgoing>Flow_2</bpmn:outgoing>
    </bpmn:task>
    <bpmn:task id="Task_2" name="Budget Check">
      <bpmn:incoming>Flow_2</bpmn:incoming>
      <bpmn:outgoing>Flow_3</bpmn:outgoing>
    </bpmn:task>
    <bpmn:exclusiveGateway id="Gateway_1" name="Amount > 10k EUR?">
      <bpmn:incoming>Flow_3</bpmn:incoming>
      <bpmn:outgoing>Flow_4</bpmn:outgoing>
      <bpmn:outgoing>Flow_5</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:task id="Task_3" name="Tender Process">
      <bpmn:incoming>Flow_4</bpmn:incoming>
      <bpmn:outgoing>Flow_6</bpmn:outgoing>
    </bpmn:task>
    <bpmn:task id="Task_4" name="Direct Procurement">
      <bpmn:incoming>Flow_5</bpmn:incoming>
      <bpmn:outgoing>Flow_7</bpmn:outgoing>
    </bpmn:task>
    <bpmn:task id="Task_5" name="Vendor Selection">
      <bpmn:incoming>Flow_6</bpmn:incoming>
      <bpmn:outgoing>Flow_8</bpmn:outgoing>
    </bpmn:task>
    <bpmn:task id="Task_6" name="Compliance Check">
      <bpmn:incoming>Flow_7</bpmn:incoming>
      <bpmn:incoming>Flow_8</bpmn:incoming>
      <bpmn:outgoing>Flow_9</bpmn:outgoing>
    </bpmn:task>
    <bpmn:task id="Task_7" name="Final Approval">
      <bpmn:incoming>Flow_9</bpmn:incoming>
      <bpmn:outgoing>Flow_10</bpmn:outgoing>
    </bpmn:task>
    <bpmn:endEvent id="EndEvent_1" name="Order Placed">
      <bpmn:incoming>Flow_10</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_1" sourceRef="StartEvent_1" targetRef="Task_1" />
    <bpmn:sequenceFlow id="Flow_2" sourceRef="Task_1" targetRef="Task_2" />
    <bpmn:sequenceFlow id="Flow_3" sourceRef="Task_2" targetRef="Gateway_1" />
    <bpmn:sequenceFlow id="Flow_4" name="Yes" sourceRef="Gateway_1" targetRef="Task_3" />
    <bpmn:sequenceFlow id="Flow_5" name="No" sourceRef="Gateway_1" targetRef="Task_4" />
    <bpmn:sequenceFlow id="Flow_6" sourceRef="Task_3" targetRef="Task_5" />
    <bpmn:sequenceFlow id="Flow_7" sourceRef="Task_4" targetRef="Task_6" />
    <bpmn:sequenceFlow id="Flow_8" sourceRef="Task_5" targetRef="Task_6" />
    <bpmn:sequenceFlow id="Flow_9" sourceRef="Task_6" targetRef="Task_7" />
    <bpmn:sequenceFlow id="Flow_10" sourceRef="Task_7" targetRef="EndEvent_1" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNShape id="StartEvent_1_di" bpmnElement="StartEvent_1">
        <dc:Bounds x="152" y="102" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="136" y="145" width="68" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_1_di" bpmnElement="Task_1">
        <dc:Bounds x="240" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_2_di" bpmnElement="Task_2">
        <dc:Bounds x="390" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_1_di" bpmnElement="Gateway_1" isMarkerVisible="true">
        <dc:Bounds x="540" y="95" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="526" y="65" width="78" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_3_di" bpmnElement="Task_3">
        <dc:Bounds x="640" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_4_di" bpmnElement="Task_4">
        <dc:Bounds x="640" y="200" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_5_di" bpmnElement="Task_5">
        <dc:Bounds x="790" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_6_di" bpmnElement="Task_6">
        <dc:Bounds x="940" y="140" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_7_di" bpmnElement="Task_7">
        <dc:Bounds x="1090" y="140" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_1_di" bpmnElement="EndEvent_1">
        <dc:Bounds x="1242" y="162" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1228" y="205" width="65" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_1_di" bpmnElement="Flow_1">
        <di:waypoint x="188" y="120" />
        <di:waypoint x="240" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_2_di" bpmnElement="Flow_2">
        <di:waypoint x="340" y="120" />
        <di:waypoint x="390" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_3_di" bpmnElement="Flow_3">
        <di:waypoint x="490" y="120" />
        <di:waypoint x="540" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_4_di" bpmnElement="Flow_4">
        <di:waypoint x="590" y="120" />
        <di:waypoint x="640" y="120" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="606" y="102" width="18" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_5_di" bpmnElement="Flow_5">
        <di:waypoint x="565" y="145" />
        <di:waypoint x="565" y="240" />
        <di:waypoint x="640" y="240" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="573" y="190" width="15" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_6_di" bpmnElement="Flow_6">
        <di:waypoint x="740" y="120" />
        <di:waypoint x="790" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_7_di" bpmnElement="Flow_7">
        <di:waypoint x="740" y="240" />
        <di:waypoint x="990" y="240" />
        <di:waypoint x="990" y="220" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_8_di" bpmnElement="Flow_8">
        <di:waypoint x="890" y="120" />
        <di:waypoint x="990" y="120" />
        <di:waypoint x="990" y="140" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_9_di" bpmnElement="Flow_9">
        <di:waypoint x="1040" y="180" />
        <di:waypoint x="1090" y="180" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_10_di" bpmnElement="Flow_10">
        <di:waypoint x="1190" y="180" />
        <di:waypoint x="1242" y="180" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;

export const onboardingBpmn = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_2" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="Process_2" isExecutable="false">
    <bpmn:startEvent id="StartEvent_2" name="New Employee">
      <bpmn:outgoing>Flow_2_1</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:task id="Task_2_1" name="Collect Personal Data">
      <bpmn:incoming>Flow_2_1</bpmn:incoming>
      <bpmn:outgoing>Flow_2_2</bpmn:outgoing>
    </bpmn:task>
    <bpmn:task id="Task_2_2" name="Create User Account">
      <bpmn:incoming>Flow_2_2</bpmn:incoming>
      <bpmn:outgoing>Flow_2_3</bpmn:outgoing>
    </bpmn:task>
    <bpmn:parallelGateway id="Gateway_2" name="Setup">
      <bpmn:incoming>Flow_2_3</bpmn:incoming>
      <bpmn:outgoing>Flow_2_4</bpmn:outgoing>
      <bpmn:outgoing>Flow_2_5</bpmn:outgoing>
      <bpmn:outgoing>Flow_2_6</bpmn:outgoing>
    </bpmn:parallelGateway>
    <bpmn:task id="Task_2_3" name="Assign Equipment">
      <bpmn:incoming>Flow_2_4</bpmn:incoming>
      <bpmn:outgoing>Flow_2_7</bpmn:outgoing>
    </bpmn:task>
    <bpmn:task id="Task_2_4" name="Grant System Access">
      <bpmn:incoming>Flow_2_5</bpmn:incoming>
      <bpmn:outgoing>Flow_2_8</bpmn:outgoing>
    </bpmn:task>
    <bpmn:task id="Task_2_5" name="Schedule Training">
      <bpmn:incoming>Flow_2_6</bpmn:incoming>
      <bpmn:outgoing>Flow_2_9</bpmn:outgoing>
    </bpmn:task>
    <bpmn:parallelGateway id="Gateway_3">
      <bpmn:incoming>Flow_2_7</bpmn:incoming>
      <bpmn:incoming>Flow_2_8</bpmn:incoming>
      <bpmn:incoming>Flow_2_9</bpmn:incoming>
      <bpmn:outgoing>Flow_2_10</bpmn:outgoing>
    </bpmn:parallelGateway>
    <bpmn:task id="Task_2_6" name="Welcome Meeting">
      <bpmn:incoming>Flow_2_10</bpmn:incoming>
      <bpmn:outgoing>Flow_2_11</bpmn:outgoing>
    </bpmn:task>
    <bpmn:endEvent id="EndEvent_2" name="Onboarding Complete">
      <bpmn:incoming>Flow_2_11</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_2_1" sourceRef="StartEvent_2" targetRef="Task_2_1" />
    <bpmn:sequenceFlow id="Flow_2_2" sourceRef="Task_2_1" targetRef="Task_2_2" />
    <bpmn:sequenceFlow id="Flow_2_3" sourceRef="Task_2_2" targetRef="Gateway_2" />
    <bpmn:sequenceFlow id="Flow_2_4" sourceRef="Gateway_2" targetRef="Task_2_3" />
    <bpmn:sequenceFlow id="Flow_2_5" sourceRef="Gateway_2" targetRef="Task_2_4" />
    <bpmn:sequenceFlow id="Flow_2_6" sourceRef="Gateway_2" targetRef="Task_2_5" />
    <bpmn:sequenceFlow id="Flow_2_7" sourceRef="Task_2_3" targetRef="Gateway_3" />
    <bpmn:sequenceFlow id="Flow_2_8" sourceRef="Task_2_4" targetRef="Gateway_3" />
    <bpmn:sequenceFlow id="Flow_2_9" sourceRef="Task_2_5" targetRef="Gateway_3" />
    <bpmn:sequenceFlow id="Flow_2_10" sourceRef="Gateway_3" targetRef="Task_2_6" />
    <bpmn:sequenceFlow id="Flow_2_11" sourceRef="Task_2_6" targetRef="EndEvent_2" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_2">
    <bpmndi:BPMNPlane id="BPMNPlane_2" bpmnElement="Process_2">
      <bpmndi:BPMNShape id="StartEvent_2_di" bpmnElement="StartEvent_2">
        <dc:Bounds x="152" y="182" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="134" y="225" width="73" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_2_1_di" bpmnElement="Task_2_1">
        <dc:Bounds x="240" y="160" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_2_2_di" bpmnElement="Task_2_2">
        <dc:Bounds x="390" y="160" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_2_di" bpmnElement="Gateway_2">
        <dc:Bounds x="540" y="175" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_2_3_di" bpmnElement="Task_2_3">
        <dc:Bounds x="640" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_2_4_di" bpmnElement="Task_2_4">
        <dc:Bounds x="640" y="200" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_2_5_di" bpmnElement="Task_2_5">
        <dc:Bounds x="640" y="320" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_3_di" bpmnElement="Gateway_3">
        <dc:Bounds x="790" y="215" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_2_6_di" bpmnElement="Task_2_6">
        <dc:Bounds x="890" y="200" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_2_di" bpmnElement="EndEvent_2">
        <dc:Bounds x="1042" y="222" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1032" y="265" width="57" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_2_1_di" bpmnElement="Flow_2_1">
        <di:waypoint x="188" y="200" />
        <di:waypoint x="240" y="200" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_2_2_di" bpmnElement="Flow_2_2">
        <di:waypoint x="340" y="200" />
        <di:waypoint x="390" y="200" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_2_3_di" bpmnElement="Flow_2_3">
        <di:waypoint x="490" y="200" />
        <di:waypoint x="540" y="200" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_2_4_di" bpmnElement="Flow_2_4">
        <di:waypoint x="565" y="175" />
        <di:waypoint x="565" y="120" />
        <di:waypoint x="640" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_2_5_di" bpmnElement="Flow_2_5">
        <di:waypoint x="590" y="200" />
        <di:waypoint x="615" y="200" />
        <di:waypoint x="615" y="240" />
        <di:waypoint x="640" y="240" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_2_6_di" bpmnElement="Flow_2_6">
        <di:waypoint x="565" y="225" />
        <di:waypoint x="565" y="360" />
        <di:waypoint x="640" y="360" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_2_7_di" bpmnElement="Flow_2_7">
        <di:waypoint x="740" y="120" />
        <di:waypoint x="815" y="120" />
        <di:waypoint x="815" y="215" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_2_8_di" bpmnElement="Flow_2_8">
        <di:waypoint x="740" y="240" />
        <di:waypoint x="790" y="240" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_2_9_di" bpmnElement="Flow_2_9">
        <di:waypoint x="740" y="360" />
        <di:waypoint x="815" y="360" />
        <di:waypoint x="815" y="265" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_2_10_di" bpmnElement="Flow_2_10">
        <di:waypoint x="840" y="240" />
        <di:waypoint x="890" y="240" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_2_11_di" bpmnElement="Flow_2_11">
        <di:waypoint x="990" y="240" />
        <di:waypoint x="1042" y="240" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;

export const simpleBpmn = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_3" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="Process_3" isExecutable="false">
    <bpmn:startEvent id="StartEvent_3" name="Start">
      <bpmn:outgoing>Flow_3_1</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:task id="Task_3_1" name="Process Request">
      <bpmn:incoming>Flow_3_1</bpmn:incoming>
      <bpmn:outgoing>Flow_3_2</bpmn:outgoing>
    </bpmn:task>
    <bpmn:task id="Task_3_2" name="Review & Approve">
      <bpmn:incoming>Flow_3_2</bpmn:incoming>
      <bpmn:outgoing>Flow_3_3</bpmn:outgoing>
    </bpmn:task>
    <bpmn:task id="Task_3_3" name="Execute & Archive">
      <bpmn:incoming>Flow_3_3</bpmn:incoming>
      <bpmn:outgoing>Flow_3_4</bpmn:outgoing>
    </bpmn:task>
    <bpmn:endEvent id="EndEvent_3" name="Complete">
      <bpmn:incoming>Flow_3_4</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_3_1" sourceRef="StartEvent_3" targetRef="Task_3_1" />
    <bpmn:sequenceFlow id="Flow_3_2" sourceRef="Task_3_1" targetRef="Task_3_2" />
    <bpmn:sequenceFlow id="Flow_3_3" sourceRef="Task_3_2" targetRef="Task_3_3" />
    <bpmn:sequenceFlow id="Flow_3_4" sourceRef="Task_3_3" targetRef="EndEvent_3" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_3">
    <bpmndi:BPMNPlane id="BPMNPlane_3" bpmnElement="Process_3">
      <bpmndi:BPMNShape id="StartEvent_3_di" bpmnElement="StartEvent_3">
        <dc:Bounds x="152" y="102" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="159" y="145" width="25" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_3_1_di" bpmnElement="Task_3_1">
        <dc:Bounds x="240" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_3_2_di" bpmnElement="Task_3_2">
        <dc:Bounds x="390" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_3_3_di" bpmnElement="Task_3_3">
        <dc:Bounds x="540" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_3_di" bpmnElement="EndEvent_3">
        <dc:Bounds x="692" y="102" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="687" y="145" width="48" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_3_1_di" bpmnElement="Flow_3_1">
        <di:waypoint x="188" y="120" />
        <di:waypoint x="240" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_3_2_di" bpmnElement="Flow_3_2">
        <di:waypoint x="340" y="120" />
        <di:waypoint x="390" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_3_3_di" bpmnElement="Flow_3_3">
        <di:waypoint x="490" y="120" />
        <di:waypoint x="540" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_3_4_di" bpmnElement="Flow_3_4">
        <di:waypoint x="640" y="120" />
        <di:waypoint x="692" y="120" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;

export const getBpmnForProcess = (processId: string): string => {
  switch (processId) {
    case '1': // Procurement
      return procurementBpmn;
    case '2': // Employee Onboarding
    case '5': // Intern Onboarding
      return onboardingBpmn;
    default:
      return simpleBpmn;
  }
};
