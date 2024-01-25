import { CreateEventsDTO } from "./create-events.dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdatePatchEventsDTO extends PartialType(CreateEventsDTO) {


}