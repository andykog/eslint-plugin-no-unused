import * as ts from 'typescript';
import {Rule} from 'eslint';
import * as ESTree from 'estree';
import {analyze} from 'no-unused'

let previousProgram: any;

function getParserServices(context: Rule.RuleContext) {
  if (
    !context.parserServices?.program ||
    !context.parserServices?.esTreeNodeToTSNodeMap ||
    (previousProgram && context.parserServices.program !== previousProgram)
  ) {
    throw new Error(
      'You have used a rule which requires parserServices to be generated. You must therefore provide a value for the "parserOptions.project" property for @typescript-eslint/parser.',
    );
  }
  previousProgram = context.parserServices.program;
  return context.parserServices;
}

export const noUnused: Rule.RuleModule = {
  meta: {
    type: 'problem',
    messages: {
      unusedIdentifier: "'{{name}}' is never used",
    },
    docs: {
      description: 'Unused identifiers are not allowed',
      recommended: false,
      url: undefined,
    },
  },

  create(context) {
    const parserServices = getParserServices(context);
    const {program} = parserServices;
    const {seenIdentifiers, usedIdentifiers} = analyze(program);

    const isUnusedIdentifier = (node: ESTree.Identifier) => {
      const originalNode = parserServices.esTreeNodeToTSNodeMap.get(node);
      return (
        seenIdentifiers.has(originalNode) && !usedIdentifiers.has(originalNode)
      );
    };

    return {
      Identifier(node) {
        if (isUnusedIdentifier(node))
          context.report({
            node,
            messageId: 'unusedIdentifier',
            data: {name: node.name},
          });
      },
    };
  },
};