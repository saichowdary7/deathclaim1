import pymysql
from pymysql.cursors import DictCursor
from pydantic_settings import BaseSettings
from pydantic import Field


class Settings(BaseSettings):
    MYSQL_USER: str = Field("root", env="MYSQL_USER")
    MYSQL_PASSWORD: str = Field("Password@123", env="MYSQL_PASSWORD")
    MYSQL_SERVER: str = Field("localhost", env="MYSQL_SERVER")
    MYSQL_PORT: int = Field(3306, env="MYSQL_PORT")
    MYSQL_DB: str = Field("death_claims_2_0", env="MYSQL_DB")

    class Config:
        env_file = ".env"
        extra = "ignore"


settings = Settings()


def get_connection():
    return pymysql.connect(
        host=settings.MYSQL_SERVER,
        user=settings.MYSQL_USER,
        password=settings.MYSQL_PASSWORD,
        database=settings.MYSQL_DB,
        port=settings.MYSQL_PORT,
        cursorclass=DictCursor,
        autocommit=True
    )