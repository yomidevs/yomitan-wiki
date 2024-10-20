python -m venv .venv
.venv/bin/pip install mkdocs-material
.venv/bin/pip install mkdocs-git-revision-date-localized-plugin mkdocs-glightbox "mkdocs-material[imaging]"
.venv/bin/mkdocs serve