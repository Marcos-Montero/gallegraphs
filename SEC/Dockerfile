FROM python:3.10

COPY requirements.txt ./requirements.txt

COPY request_handler.py ./request_handler.py
COPY main.py ./main.py

RUN pip install -r requirements.txt

CMD ["python", "./main.py"]