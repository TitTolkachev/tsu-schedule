import {AudienceMockService} from "./services/mock/audience-mock.service";
import {SubjectMockService} from "./services/mock/subject-mock.service";
import {GroupMockService} from "./services/mock/group-mock.service";
import {TeacherMockService} from "./services/mock/teacher-mock.service";
import {UserMockService} from "./services/mock/user-mock.service";
import {RequestMockService} from "./services/mock/request-mock.service";

export const environment = {
  production: false,
  groupService: GroupMockService,
  audienceService: AudienceMockService,
  subjectService: SubjectMockService,
  teacherService: TeacherMockService,
  userService: UserMockService,
  requestService: RequestMockService
};
