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
      lessonNumber: inputs.SelectedTime!,
      frequency: inputs.SelectedRepeat!
    })
  }

  modifyPair(pair: Pair | undefined | null, inputs: SelectedInput): Observable<void> {
    if (pair == undefined) {
      throw Error("Lesson isn't selected")
    }
    if (!inputs.isValidSelected()) {
      throw Error("All field must be filled") // TODO норм вывод ошибки в модальное окно
    }

    return this.lessonService.modifyLessonInGroup(pair.Id, {
      groupsIds: inputs.SelectedGroups,
      studyRoomId: inputs.SelectedAudience!,
      lessonTypeId: inputs.SelectedPairType!,
      teacherId: inputs.SelectedTeacher!,
      subjectId: inputs.SelectedSubject!,
      date: inputs.SelectedDateStart!,
      lessonNumber: inputs.SelectedTime!
    })
  }

  modifyGroupPair(pair: Pair | undefined | null, inputs: SelectedInput): Observable<void> {
    if (pair == undefined) {
      throw Error("Lesson isn't selected")
    }
    if (!inputs.isValidSelected()) {
      throw Error("All field must be filled") // TODO норм вывод ошибки в модальное окно
    }

    return this.lessonService.modifyLessonGroup(pair.Id, {
      groupsIds: inputs.SelectedGroups,
      studyRoomId: inputs.SelectedAudience!,
      lessonTypeId: inputs.SelectedPairType!,
      teacherId: inputs.SelectedTeacher!,
      subjectId: inputs.SelectedSubject!,
      startDate: inputs.SelectedDateStart!,
      endDate: inputs.SelectedDateEnd!,
      lessonNumber: inputs.SelectedTime!,
      frequency: inputs.SelectedRepeat!
    })
  }

  deletePair(pair: Pair | undefined | null): Observable<void> {
    if (pair == null) {
      throw Error("Lesson isn't selected")
    }

    return this.lessonService.deleteLessonInGroup(pair.Id)
  }

  deleteGroupPair(pair: Pair | undefined | null): Observable<void> {
    if (pair == null) {
      throw Error("Lesson isn't selected")
    }

    return this.lessonService.deleteLessonGroup(pair.Id)
  }
}
