+++
title = "Admin"
template = "admin/admin.html"
+++

{{ gen_component_top(name="note", components=["type", "icon", "body"], types=["string", "string", "markdown"]) }}
{{ note(type="${data.type}", icon="${data.icon}", body="${data.body}") }}
{{ gen_component_end() }}
