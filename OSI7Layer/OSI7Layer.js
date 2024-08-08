// 물리 계층 (1계층)
class PhysicalLayer {
    // 전기적 신호로 변환하여 전송
    send(data) {
        console.log(`물리 계층: 데이터 "${data}"를 전기 신호로 변환하여 전송합니다.`);
        return data; // 신호로 변환되지만, 시뮬레이션에서는 데이터 그대로 반환
    }

    // 신호를 데이터로 변환
    receive(data) {
        console.log(`물리 계층: 신호를 데이터 "${data}"로 변환하여 상위 계층에 전달합니다.`);
        return data;
    }
}

// 데이터 링크 계층 (2계층)
class DataLinkLayer {
    // 데이터 프레임으로 캡슐화
    send(data) {
        const frame = `FRAME:${data}`;
        console.log(`데이터 링크 계층: 데이터 "${data}"를 프레임 "${frame}"으로 캡슐화하여 전송합니다.`);
        return frame;
    }

    // 프레임에서 데이터 추출
    receive(frame) {
        const data = frame.replace('FRAME:', '');
        console.log(`데이터 링크 계층: 프레임 "${frame}"에서 데이터 "${data}"를 추출하여 상위 계층에 전달합니다.`);
        return data;
    }
}

// 네트워크 계층 (3계층)
class NetworkLayer {
    // IP 패킷으로 캡슐화
    send(data) {
        const packet = `IP_PACKET:${data}`;
        console.log(`네트워크 계층: 데이터 "${data}"를 IP 패킷 "${packet}"으로 캡슐화하여 전송합니다.`);
        return packet;
    }

    // IP 패킷에서 데이터 추출
    receive(packet) {
        const data = packet.replace('IP_PACKET:', '');
        console.log(`네트워크 계층: IP 패킷 "${packet}"에서 데이터 "${data}"를 추출하여 상위 계층에 전달합니다.`);
        return data;
    }
}

// 전송 계층 (4계층)
class TransportLayer {
    constructor() {
        this.sequenceNumber = 0;
        this.acknowledgedPackets = new Set();
    }

    // 데이터 세그먼트로 나누어 전송
    send(data) {
        this.sequenceNumber++;
        const segment = `SEGMENT_${this.sequenceNumber}:${data}`;
        console.log(`전송 계층: 데이터 "${data}"를 세그먼트 "${segment}"으로 나누어 전송합니다.`);
        return segment;
    }

    // 세그먼트를 재조립하고 신뢰성 보장
    receive(segment) {
        const [seq, data] = segment.split(':');
        const seqNumber = parseInt(seq.split('_')[1]);

        if (!this.acknowledgedPackets.has(seqNumber)) {
            this.acknowledgedPackets.add(seqNumber);
            console.log(`전송 계층: 세그먼트 "${segment}"을 수신하여 데이터 "${data}"를 재조립하여 상위 계층에 전달합니다.`);
            return data;
        } else {
            console.log(`전송 계층: 세그먼트 "${segment}"은 중복된 세그먼트로 무시됩니다.`);
            return null;
        }
    }
}

// 세션 계층 (5계층)
class SessionLayer {
    // 세션 설정 후 데이터 전송
    send(data) {
        console.log(`세션 계층: 세션을 설정하고 데이터 "${data}"를 전송합니다.`);
        return data;
    }

    // 세션을 통해 데이터 전달
    receive(data) {
        console.log(`세션 계층: 세션을 통해 데이터 "${data}"를 상위 계층에 전달합니다.`);
        return data;
    }
}

// 표현 계층 (6계층)
class PresentationLayer {
    // 데이터 인코딩/암호화
    send(data) {
        const encodedData = Buffer.from(data).toString('base64'); // 인코딩 예시
        console.log(`표현 계층: 데이터 "${data}"를 인코딩하여 "${encodedData}"로 전송합니다.`);
        return encodedData;
    }

    // 데이터 디코딩/복호화
    receive(encodedData) {
        const data = Buffer.from(encodedData, 'base64').toString('utf8'); // 디코딩 예시
        console.log(`표현 계층: 인코딩된 데이터 "${encodedData}"를 디코딩하여 "${data}"로 상위 계층에 전달합니다.`);
        return data;
    }
}

// 응용 계층 (7계층)
class ApplicationLayer {
    // 데이터를 사용자에게 제공
    send(data) {
        console.log(`응용 계층: 사용자에게 데이터 "${data}"를 제공합니다.`);
        return data;
    }

    // 사용자로부터 데이터 받아서 하위 계층으로 전달
    receive(data) {
        console.log(`응용 계층: 사용자로부터 받은 데이터 "${data}"를 하위 계층으로 전달합니다.`);
        return data;
    }
}

// 계층을 통해 데이터 전송을 시뮬레이션
function simulateOSI(data) {
    const appLayer = new ApplicationLayer();
    const presLayer = new PresentationLayer();
    const sessLayer = new SessionLayer();
    const transLayer = new TransportLayer();
    const netLayer = new NetworkLayer();
    const dataLinkLayer = new DataLinkLayer();
    const physLayer = new PhysicalLayer();

    console.log('--- 데이터 발신 ---');
    // 데이터를 상위에서 하위로 전송
    let outgoingData = appLayer.receive(data);
    outgoingData = presLayer.receive(outgoingData);
    outgoingData = sessLayer.receive(outgoingData);
    outgoingData = transLayer.receive(outgoingData);
    outgoingData = netLayer.receive(outgoingData);
    outgoingData = dataLinkLayer.receive(outgoingData);
    outgoingData = physLayer.receive(outgoingData);

    console.log('--- 데이터가 네트워크를 통해 전달됩니다 ---');

    console.log('--- 데이터 수신 ---');
    // 데이터를 하위에서 상위로 전송
    let incomingData = physLayer.send(outgoingData);
    incomingData = dataLinkLayer.send(incomingData);
    incomingData = netLayer.send(incomingData);
    incomingData = transLayer.send(incomingData);
    incomingData = sessLayer.send(incomingData);
    incomingData = presLayer.send(incomingData);
    incomingData = appLayer.send(incomingData);
}

// 데이터 전송 시뮬레이션 실행
simulateOSI('Hello, OSI!');
