export enum ErrorMessage {
  CONNECTION_REFUSED = "Не удалось установить соединение с сервером.",
  INTERNAL_SERVER_ERROR = "Произошла внутренняя ошибка, пожалуйста, обратитесь к разработчикам.",
  UNKNOWN_ERROR = "Произошла неизвестная ошибка, пожалуйста, обратитесь к разработчикам.",

  VALIDATION_GROUP_NUMBER_EMPTY = "Номер группы не может быть пустым.",

  VALIDATION_AUDIENCE_NUMBER_EMPTY = "Номер аудитории не может быть пустым.",
  VALIDATION_AUDIENCE_NAME_EMPTY = "Название аудитории не может быть пустым.",
  VALIDATION_AUDIENCE_FLOOR_EMPTY = "Этаж аудитории не может быть пустым.",
  VALIDATION_AUDIENCE_FLOOR_NOT_NUMBER = "Этаж аудитории должен быть числом.",
  VALIDATION_AUDIENCE_FRAME_EMPTY = "Корпус аудитории не может быть пустым.",
  VALIDATION_AUDIENCE_FRAME_NOT_NUMBER = "Корпус аудитории должен быть числом.",

  VALIDATION_SUBJECT_NAME_EMPTY = "Название предмета не может быть пустым.",

  VALIDATION_TEACHER_FIRST_NAME_EMPTY = "Имя преподавателя не может быть пустым.",
  VALIDATION_TEACHER_LAST_NAME_EMPTY = "Фамилия преподавателя не может быть пустым.",
  VALIDATION_TEACHER_PATRONYMIC_NAME_EMPTY = "Отчество преподавателя не может быть пустым.",

  VALIDATION_USER_FIRST_NAME_EMPTY = "Имя пользователя не может быть пустым.",
  VALIDATION_USER_LAST_NAME_EMPTY = "Фамилия пользователя не может быть пустым.",
  VALIDATION_USER_PATRONYMIC_NAME_EMPTY = "Отчество пользователя не может быть пустым.",
}
