+++
title = "Admin"
template = "admin/admin.html"
+++

{{ gen_component_top(name="note", components=["type", "icon", "body"], types=["string", "string", "markdown"]) }}
{{ note(type="${data.type}", icon="${data.icon}", body="${data.body}") }}
{{ gen_component_end() }}

{{ gen_component_top(name="youtube", components=["id", "playlist", "class"], types=["string", "string", "string"]) }}
{{ youtube(id="${data.id}", playlist="${data.playlist}", class="${data.class}") }}
{{ gen_component_end() }}

{{ gen_component_top(name="pdf", components=["pdf", "width"], types=["string", "string"]) }}
{{ pdf(pdf="${data.pdf}", width="${data.width}") }}
{{ gen_component_end() }}