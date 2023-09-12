"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/app.tsx
var app_exports = {};
__export(app_exports, {
  default: () => Create
});
module.exports = __toCommonJS(app_exports);
var import_api2 = require("@raycast/api");

// src/hooks/useFile.tsx
var import_api = require("@raycast/api");
var import_fs = require("fs");
var import_react = require("react");
function useFile() {
  const [filePath, setFilePath] = (0, import_react.useState)(null), [fileExists, setFileExists] = (0, import_react.useState)(false), [error, setError] = (0, import_react.useState)(null), [loading, setLoading] = (0, import_react.useState)(true), setFile = async (file) => {
    const fileBad = async (error2 = "There was an error finding the file.") => {
      setFilePath(null);
      setFileExists(false);
      setError(error2);
      await import_api.LocalStorage.removeItem("fileLocation");
      setLoading(false);
      console.error("File: ");
      console.error(file);
      console.error("Error: ");
      console.error(error2);
    };
    if (!file)
      return fileBad("No file path passed/saved.");
    if (typeof file !== "string")
      return fileBad("Invalid type on path.");
    if (file.trim().length === 0)
      return fileBad("Path is an empty string.");
    if (!(0, import_fs.existsSync)(file))
      return fileBad(`File does not exist at path ${file}`);
    setFilePath(file);
    setFileExists(true);
    setError(null);
    setLoading(false);
  };
  (0, import_react.useEffect)(() => {
    (async () => {
      setFile(await import_api.LocalStorage.getItem("fileLocation") || "");
    })();
  }, []);
  return { fileExists, filePath, error, loading, setFile };
}

// src/app.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Create() {
  const { error, fileExists, filePath, loading, setFile } = useFile();
  const submitFile = async ({ "json-file": { 0: file } }) => {
    await setFile(file);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      !fileExists && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api2.Form, {
        actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api2.ActionPanel, {
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api2.Action.SubmitForm, {
            title: "Submit",
            onSubmit: submitFile
          })
        }),
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api2.Form.FilePicker, {
          id: "json-file",
          title: "JSON file"
        })
      }),
      filePath && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api2.MenuBarExtra, {})
    ]
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vZGV2L21pc2MvcmF5Y2FzdC8yZmEtdG9vbHMvc3JjL2FwcC50c3giLCAiLi4vLi4vLi4vLi4vZGV2L21pc2MvcmF5Y2FzdC8yZmEtdG9vbHMvc3JjL2hvb2tzL3VzZUZpbGUudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBMb2NhbFN0b3JhZ2UsIEFjdGlvbiwgQWN0aW9uUGFuZWwsIEZvcm0sIExpc3QsIE1lbnVCYXJFeHRyYSB9IGZyb20gXCJAcmF5Y2FzdC9hcGlcIjtcbmltcG9ydCB7IGV4aXN0c1N5bmMgfSBmcm9tIFwiZnNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VGaWxlIGZyb20gXCIuL2hvb2tzL3VzZUZpbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlKCkge1xuICBjb25zdCB7IGVycm9yLCBmaWxlRXhpc3RzLCBmaWxlUGF0aCwgbG9hZGluZywgc2V0RmlsZSB9ID0gdXNlRmlsZSgpO1xuXG4gIGNvbnN0IHN1Ym1pdEZpbGUgPSBhc3luYyAoeyBcImpzb24tZmlsZVwiOiB7IDA6IGZpbGUgfSB9OiB7IFwianNvbi1maWxlXCI6IHsgMDogc3RyaW5nIH0gfSkgPT4ge1xuICAgIGF3YWl0IHNldEZpbGUoZmlsZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgeyFmaWxlRXhpc3RzICYmIChcbiAgICAgICAgPEZvcm1cbiAgICAgICAgICBhY3Rpb25zPXtcbiAgICAgICAgICAgIDxBY3Rpb25QYW5lbD5cbiAgICAgICAgICAgICAgPEFjdGlvbi5TdWJtaXRGb3JtIHRpdGxlPVwiU3VibWl0XCIgb25TdWJtaXQ9e3N1Ym1pdEZpbGV9IC8+XG4gICAgICAgICAgICA8L0FjdGlvblBhbmVsPlxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxGb3JtLkZpbGVQaWNrZXIgaWQ9XCJqc29uLWZpbGVcIiB0aXRsZT1cIkpTT04gZmlsZVwiIC8+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgICl9XG4gICAgICB7ZmlsZVBhdGggJiYgPE1lbnVCYXJFeHRyYT48L01lbnVCYXJFeHRyYT59XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgQWxlcnQsIExvY2FsU3RvcmFnZSB9IGZyb20gXCJAcmF5Y2FzdC9hcGlcIjtcbmltcG9ydCB7IGV4aXN0c1N5bmMgfSBmcm9tIFwiZnNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRmlsZSgpIHtcbiAgY29uc3QgW2ZpbGVQYXRoLCBzZXRGaWxlUGF0aF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKSxcbiAgICBbZmlsZUV4aXN0cywgc2V0RmlsZUV4aXN0c10gPSB1c2VTdGF0ZShmYWxzZSksXG4gICAgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKSxcbiAgICBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKSxcbiAgICBzZXRGaWxlID0gYXN5bmMgKGZpbGU6IGFueSkgPT4ge1xuICAgICAgY29uc3QgZmlsZUJhZCA9IGFzeW5jIChlcnJvciA9IFwiVGhlcmUgd2FzIGFuIGVycm9yIGZpbmRpbmcgdGhlIGZpbGUuXCIpID0+IHtcbiAgICAgICAgc2V0RmlsZVBhdGgobnVsbCk7XG4gICAgICAgIHNldEZpbGVFeGlzdHMoZmFsc2UpO1xuICAgICAgICBzZXRFcnJvcihlcnJvcik7XG4gICAgICAgIGF3YWl0IExvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiZmlsZUxvY2F0aW9uXCIpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZpbGU6IFwiKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihmaWxlKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOiBcIik7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfTtcbiAgICAgIGlmICghZmlsZSkgcmV0dXJuIGZpbGVCYWQoXCJObyBmaWxlIHBhdGggcGFzc2VkL3NhdmVkLlwiKTtcbiAgICAgIGlmICh0eXBlb2YgZmlsZSAhPT0gXCJzdHJpbmdcIikgcmV0dXJuIGZpbGVCYWQoXCJJbnZhbGlkIHR5cGUgb24gcGF0aC5cIik7XG4gICAgICBpZiAoZmlsZS50cmltKCkubGVuZ3RoID09PSAwKSByZXR1cm4gZmlsZUJhZChcIlBhdGggaXMgYW4gZW1wdHkgc3RyaW5nLlwiKTtcbiAgICAgIGlmICghZXhpc3RzU3luYyhmaWxlKSkgcmV0dXJuIGZpbGVCYWQoYEZpbGUgZG9lcyBub3QgZXhpc3QgYXQgcGF0aCAke2ZpbGV9YCk7XG4gICAgICBzZXRGaWxlUGF0aChmaWxlKTtcbiAgICAgIHNldEZpbGVFeGlzdHModHJ1ZSk7XG4gICAgICBzZXRFcnJvcihudWxsKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIHNldEZpbGUoKGF3YWl0IExvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmlsZUxvY2F0aW9uXCIpKSB8fCBcIlwiKTtcbiAgICB9KSgpO1xuICB9LCBbXSk7XG4gIHJldHVybiB7IGZpbGVFeGlzdHMsIGZpbGVQYXRoLCBlcnJvciwgbG9hZGluZywgc2V0RmlsZSB9O1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBQUEsY0FBNEU7OztBQ0E1RSxpQkFBb0M7QUFDcEMsZ0JBQTJCO0FBQzNCLG1CQUFvQztBQUVyQixTQUFSLFVBQTJCO0FBQ2hDLFFBQU0sQ0FBQyxVQUFVLFdBQVcsUUFBSSx1QkFBd0IsSUFBSSxHQUMxRCxDQUFDLFlBQVksYUFBYSxRQUFJLHVCQUFTLEtBQUssR0FDNUMsQ0FBQyxPQUFPLFFBQVEsUUFBSSx1QkFBd0IsSUFBSSxHQUNoRCxDQUFDLFNBQVMsVUFBVSxRQUFJLHVCQUFTLElBQUksR0FDckMsVUFBVSxPQUFPLFNBQWM7QUFDN0IsVUFBTSxVQUFVLE9BQU9DLFNBQVEsMkNBQTJDO0FBQ3hFLGtCQUFZLElBQUk7QUFDaEIsb0JBQWMsS0FBSztBQUNuQixlQUFTQSxNQUFLO0FBQ2QsWUFBTSx3QkFBYSxXQUFXLGNBQWM7QUFDNUMsaUJBQVcsS0FBSztBQUNoQixjQUFRLE1BQU0sUUFBUTtBQUN0QixjQUFRLE1BQU0sSUFBSTtBQUNsQixjQUFRLE1BQU0sU0FBUztBQUN2QixjQUFRLE1BQU1BLE1BQUs7QUFBQSxJQUNyQjtBQUNBLFFBQUksQ0FBQztBQUFNLGFBQU8sUUFBUSw0QkFBNEI7QUFDdEQsUUFBSSxPQUFPLFNBQVM7QUFBVSxhQUFPLFFBQVEsdUJBQXVCO0FBQ3BFLFFBQUksS0FBSyxLQUFLLEVBQUUsV0FBVztBQUFHLGFBQU8sUUFBUSwwQkFBMEI7QUFDdkUsUUFBSSxLQUFDLHNCQUFXLElBQUk7QUFBRyxhQUFPLFFBQVEsK0JBQStCLE1BQU07QUFDM0UsZ0JBQVksSUFBSTtBQUNoQixrQkFBYyxJQUFJO0FBQ2xCLGFBQVMsSUFBSTtBQUNiLGVBQVcsS0FBSztBQUFBLEVBQ2xCO0FBQ0YsOEJBQVUsTUFBTTtBQUNkLEtBQUMsWUFBWTtBQUNYLGNBQVMsTUFBTSx3QkFBYSxRQUFRLGNBQWMsS0FBTSxFQUFFO0FBQUEsSUFDNUQsR0FBRztBQUFBLEVBQ0wsR0FBRyxDQUFDLENBQUM7QUFDTCxTQUFPLEVBQUUsWUFBWSxVQUFVLE9BQU8sU0FBUyxRQUFRO0FBQ3pEOzs7QURwQ0E7QUFLZSxTQUFSLFNBQTBCO0FBQy9CLFFBQU0sRUFBRSxPQUFPLFlBQVksVUFBVSxTQUFTLFFBQVEsSUFBSSxRQUFRO0FBRWxFLFFBQU0sYUFBYSxPQUFPLEVBQUUsYUFBYSxFQUFFLEdBQUcsS0FBSyxFQUFFLE1BQXNDO0FBQ3pGLFVBQU0sUUFBUSxJQUFJO0FBQUEsRUFDcEI7QUFFQSxTQUNFO0FBQUEsSUFDRztBQUFBLE9BQUMsY0FDQSw0Q0FBQztBQUFBLFFBQ0MsU0FDRSw0Q0FBQztBQUFBLFVBQ0Msc0RBQUMsbUJBQU8sWUFBUDtBQUFBLFlBQWtCLE9BQU07QUFBQSxZQUFTLFVBQVU7QUFBQSxXQUFZO0FBQUEsU0FDMUQ7QUFBQSxRQUdGLHNEQUFDLGlCQUFLLFlBQUw7QUFBQSxVQUFnQixJQUFHO0FBQUEsVUFBWSxPQUFNO0FBQUEsU0FBWTtBQUFBLE9BQ3BEO0FBQUEsTUFFRCxZQUFZLDRDQUFDLDRCQUFhO0FBQUE7QUFBQSxHQUM3QjtBQUVKOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfYXBpIiwgImVycm9yIl0KfQo=
