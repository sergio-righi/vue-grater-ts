<template>
  <gv-dropdown>
    <template #trigger>
      <gv-button>
        <gv-icon value="dots-vertical" />
      </gv-button>
    </template>
    <template #content>
      <gv-dropdown-item header>Header</gv-dropdown-item>
      <gv-dropdown-item><gv-emoji value="italy" />Italian</gv-dropdown-item>
      <gv-dropdown-item><gv-emoji value="france" />French</gv-dropdown-item>
      <gv-dropdown-item><gv-emoji value="germany" />German</gv-dropdown-item>
      <gv-dropdown-item header>Option</gv-dropdown-item>
      <gv-dropdown-item>
        <gv-icon value="format-paragraph" />Paragraph
      </gv-dropdown-item>
      <gv-dropdown-item><gv-icon value="comment-quote" />Quote</gv-dropdown-item>
    </template>
  </gv-dropdown>
</template>
