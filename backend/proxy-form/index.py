"""Проксирует отправку формы в newapi.ru и дублирует заявку на email."""
import json
import os
import smtplib
import urllib.request
import urllib.parse
from email.mime.text import MIMEText

NEWAPI_URL = "https://newapi.ru/mfh/addorders?idp=c218122c-a113-1c8e-aa4abd611759ec31"
NOTIFY_EMAIL = "cpa.m4ster@yandex.ru"

CORS_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
}


def send_email(data: dict):
    name = data.get("fullname", "—")
    phone = data.get("phone", "—")
    work = data.get("work", "—")

    text = f"""Новая заявка с сайта!

Имя: {name}
Телефон: {phone}
Комментарий: {work}
"""

    msg = MIMEText(text, "plain", "utf-8")
    msg["Subject"] = f"Новая заявка: {name} {phone}"
    msg["From"] = NOTIFY_EMAIL
    msg["To"] = NOTIFY_EMAIL

    with smtplib.SMTP_SSL("smtp.yandex.ru", 465) as smtp:
        smtp.login(NOTIFY_EMAIL, os.environ["SMTP_PASSWORD"])
        smtp.send_message(msg)


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

        try:
            send_email(body)
        except Exception:
            pass

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
