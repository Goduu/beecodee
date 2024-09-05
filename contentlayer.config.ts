import { Section } from "./src/contentlayerDefinitions/documents/Section"
import { Activity } from "./src/contentlayerDefinitions/documents/Activity"
import { Course } from "./src/contentlayerDefinitions/documents/Course"
import { Lesson } from "./src/contentlayerDefinitions/documents/Lesson"
import { Unit, UnitContent } from "./src/contentlayerDefinitions/documents/Unit"
import { makeSource } from "contentlayer/source-files"

// Make the source with all document types
export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Course, Unit, UnitContent, Lesson, Activity, Section],
})
