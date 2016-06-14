
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

/// <reference path="ui/view.ts" />
/// <reference path="editor/graph.ts" />


module KaryGraph {
    /** What starts the code when it starts. */
    export function INIT ( ) {
        InitScreenInformation( );
        GenerateSomeRandomNodes( 10 );
    }
}

