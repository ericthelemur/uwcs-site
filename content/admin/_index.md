+++
title = "Admin"
template = "admin/admin.html"
+++

<script>
  CMS.registerEditorComponent({
    id: "note",
    label: "Note",
    fields: [
      {
        name: 'type',
        label: 'Type',
        widget: 'string'

      },
      {
        name: 'icon',
        label: 'Icon',
        widget: 'string'
      },
      {
        name: 'body',
        label: 'Body',
        widget: 'string'
      }
    ],
    // Parse md to component
    pattern: /^{{ note\(type="([a-z]+)", icon="([a-z\-]+)", body="([^"]+)"\) }}$/ms,
    fromBlock: function(match) {
      return {
        type: match[1],
        icon: match[2],
        body: match[3]
      };
    },
    // Convert component to md
    toBlock: function(data) {
      return `{{/* note(type="${data.type}", icon="${data.icon}", body="${data.body}") */}}`;
    },
    // Generate preview of component
    toPreview: function(data) {
      return `{{ note(type="${data.type}", icon="${data.icon}", body="${data.body}") }}`;
    }
  });
  </script>