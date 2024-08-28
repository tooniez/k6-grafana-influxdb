import { check } from "k6";

export const performResponseChecks = (response) => {
    return check(response, {
        "status is 200": (r) => r.status === 200,
        "content-type is JSON": (r) => {
            const ct = r.headers['Content-Type'] || r.headers['content-type'];
            return ct && (ct.includes('application/json') || ct.includes('text/json'));
        },
        "response body is not empty": (r) => r.body.length > 0,
        "response body is valid JSON": (r) => {
            try {
                JSON.parse(r.body);
                return true;
            } catch (e) {
                console.log('JSON parsing error:', e);
                return false;
            }
        },
        "response time is less than 500ms": (r) => r.timings.duration < 500,
    });
};

export const performBodyChecks = (body) => {
    return check(body, {
        "name is present": (b) => b.name && b.name.length > 0,
        "height is a number": (b) => !isNaN(Number(b.height)),
        "mass is a number": (b) => !isNaN(Number(b.mass)),
    });
};