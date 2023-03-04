export enum ErrorMessage {
  CONNECTION_REFUSED = "Не удалось установить соединение с сервером.",
  INTERNAL_SERVER_ERROR = "Произошла внутренняя ошибка, пожалуйста, обратитесь к разработчикам.",
  UNKNOWN_ERROR = "Произошла неизвестная ошибка, пожалуйста, обратитесь к разработчикам.",

  VALIDATION_GROUP_NUMBER_EMPTY = "Номер группы не может быть пустым.",

  VALIDATION_AUDIENCE_NUMBER_EMPTY = "Номер аудитории не может быть пустым.",
  VALIDATION_AUDIENCE_NAME_EMPTY = "Название аудитории не может быть пустым.",
  VALIDATION_AUDIENCE_FLOOR_EMPTY = "Этаж аудитории не может быть пустым.",
  VALIDATION_AUDIENCE_FRAME_EMPTY = "Корпус аудитории не может быть пустым.",
}
