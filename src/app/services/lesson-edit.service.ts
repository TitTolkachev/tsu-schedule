import {Injectable} from '@angular/core';
import {ILessonService} from "./i-lesson.service";
import {Observable} from "rxjs";
import {SelectedInput} from "../pages/moderator/edit-page/selected-input";
import {Pair} from "../pages/moderator/edit-page/models/Pair";

@Injectable({
  providedIn: 'root'
})
export class LessonEditService {

  constructor(
    private lessonService: ILessonService,
  ) {}

  createPair(inputs: SelectedInput): Observable<void> {
    if (!inputs.isValidSelected()) {
      throw Error("All field must be filled") // TODO норм вывод ошибки в модальное окно
    }

    return this.lessonService.createLesson({
      groupsIds: inputs.SelectedGroups,
      studyRoomId: inputs.SelectedAudience!,
      lessonTypeId: inputs.SelectedPairType!,
      teacherId: inputs.SelectedTeacher!,
      subjectId: inputs.SelectedSubject!,
      startDate: inputs.SelectedDateStart!,
      endDate: inputs.SelectedDateEnd!,
      dayOfWeek: inputs.SelectedWeekDay!,
      lessonNumber: inputs.SelectedTime!,
      frequency: 1 // TODO Тит доделай
    })
  }

  modifyPair(pair: Pair | undefined | null, inputs: SelectedInput): Observable<void> {
    if (pair == undefined) {
      throw Error("Lesson isn't selected")
    }
    if (!inputs.isValidSelected()) {
      throw Error("All field must be filled") // TODO норм вывод ошибки в модальное окно
    }

    return this.lessonService.modifyLesson(pair.Id, {
      groupsIds: inputs.SelectedGroups,
      studyRoomId: inputs.SelectedAudience!,
      lessonTypeId: inputs.SelectedPairType!,
      teacherId: inputs.SelectedTeacher!,
      subjectId: inputs.SelectedSubject!,
      startDate: inputs.SelectedDateStart!,
      endDate: inputs.SelectedDateEnd!,
      dayOfWeek: inputs.SelectedWeekDay!,
      lessonNumber: inputs.SelectedTime!,
      frequency: 1 // TODO Тит доделай
    })
  }

  modifyGroupPair(pair: Pair | undefined | null, inputs: SelectedInput): Observable<void> {
    throw Error("Not implemented")
  }

  deletePair(pair: Pair | undefined | null): Observable<void> {
    if (pair == null) {
      throw Error("Lesson isn't selected")
    }

    return this.lessonService.deleteLesson(pair.Id)
  }

  deleteGroupPair(pair: Pair | undefined | null): Observable<void> {
    throw Error("Not implemented")
  }
}
