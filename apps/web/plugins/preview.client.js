export default function ({ query, req, $sanity, enablePreview }) {
  if (query.preview) {
    enablePreview()
  }
}
