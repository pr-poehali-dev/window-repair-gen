"""Проксирует отправку формы в newapi.ru, обходя CORS."""
import json
import urllib.request
import urllib.parse

NEWAPI_URL = "https://newapi.ru/mfh/addorders?idp=c218122c-a113-1c8e-aa4abd611759ec31"

CORS_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
}

def handler(event: dict, context) -> dict:
    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": CORS_HEADERS, "body": ""}

    try:
        body = json.loads(event.get("body") or "{}")

        params = urllib.parse.urlencode(body).encode("utf-8")

        req = urllib.request.Request(
            NEWAPI_URL,
            data=params,
            method="POST",
            headers={"Content-Type": "application/x-www-form-urlencoded"},
        )

        with urllib.request.urlopen(req, timeout=10) as resp:
            status = resp.status
            resp_body = resp.read().decode("utf-8")

        return {
            "statusCode": 200,
            "headers": CORS_HEADERS,
            "body": json.dumps({"ok": True, "status": status, "response": resp_body}),
        }

    except Exception as e:
        return {
            "statusCode": 200,
            "headers": CORS_HEADERS,
            "body": json.dumps({"ok": False, "error": str(e)}),
        }
