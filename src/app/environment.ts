import {GroupService} from "./services/dao/group.service";
import {AudienceService} from "./services/dao/audience.service";
import {SubjectService} from "./services/dao/subject.service";
import {TeacherService} from "./services/dao/teacher.service";
import {UserService} from "./services/dao/user.service";
import {RequestService} from "./services/dao/request.service";
import {ScheduleService} from "./services/dao/schedule.service";
import {LessonService} from "./services/dao/lesson.service";

export const environment = {
  production: false,
  groupService: GroupService,
  audienceService: AudienceService,
  subjectService: SubjectService,
  teacherService: TeacherService,
  scheduleService: ScheduleService,
  lessonService: LessonService,
  userService: UserService,
  requestService: RequestService
};
